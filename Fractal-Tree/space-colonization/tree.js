import Leaf from './leaf.js';
import Branch from './branch.js';

const max_dist = 100;
const min_dist = 10;

export default class Tree{
	constructor(){
		this.leaves = Array(200).fill().map(() => new Leaf());
		this.branches = [];

		let pos = createVector(width/2,height);
		let dir = createVector(0,-1);
		this.root = new Branch(null,pos,dir,40);
		this.branches.push(this.root);

		let current = this.root;
		let found = false;
		while(!found){
			this.leaves.forEach(leaf => {
				let d = dist(current.pos,leaf.pos);

				if(d < max_dist){
					found = true;
				}
			});

			if(!found){
				let branch = current.next();
				this.branches.push(branch);
				current = branch;
			}
		}
	}

	grow(){
		this.leaves.forEach(leaf => {
			let closest = null;
			let record = Infinity;
			for(const branch of this.branches){
				let d = dist(leaf.pos,branch.pos);
				if(d < min_dist){
					leaf.reached = true;
					closest = null;
					break;
				}else if(d > max_dist){

				}else if(closest === null || d < record){
					closest = branch;
					record = d;
				}
			};

			if(closest !== null){
				let dir = subVector(leaf.pos,closest.pos);
				normalize(dir);
				closest.dir.x += dir.x;
				closest.dir.y += dir.y;
				closest.count++;
			}
		});

		for(let i=this.leaves.length-1;i>=0;i--){
			if(this.leaves[i].reached){
				this.leaves.splice(i,1);
			}
		}

		this.branches.forEach(branch => {
			if(branch.count > 0){
				branch.dir.x /= branch.count;
				branch.dir.y /= branch.count;
				this.branches.push(branch.next());
				// let newPos = addVector(branch.pos,branch.dir);
				// let newBranch = new Branch(branch,newPos,branch.dir);
				// this.branches.push(newBranch);
			}
			branch.reset();
		});
	}

	draw(ctx){
		this.leaves.forEach(leaf => {
			leaf.draw(ctx);
		});

		this.branches.forEach(branch => {
			branch.draw(ctx);
		});

		this.branches.forEach(branch => {
			if(!branch.bloomed) return;
			branch.drawFlower(ctx);
		});

		this.grow();
	}
}

function dist(v1,v2){
	return Math.sqrt(Math.pow(v1.x - v2.x,2) + Math.pow(v1.y - v2.y,2));
}

function createVector(x,y){
	return {x,y};
}

function subVector(v1,v2){
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y
	};
}

function addVector(v1,v2){
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	};
}

function normalize(v){
	let d = dist(v,{x:0,y:0});
	v.x /= d;
	v.y /= d;
}