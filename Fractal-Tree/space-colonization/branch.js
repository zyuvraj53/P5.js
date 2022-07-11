export default class Branch{
	constructor(parent,pos,dir,size){
		this.parent = parent;
		this.pos = pos;
		this.dir = dir;
		this.original_dir = copy(dir);
		this.count = 0;

		this.length = 5;
		this.size = size;

		this.target = addVector(this.pos,this.dir);
		this.bushCounter = 80;
		this.noBush = false;
		this.bushSize = 20;
		this.ratio = (parent !== null) ? 0.99 * parent.ratio : 1;
		this.bloomed = false;
	}

	next(){
		this.noBush = true;
		let nextDir = mult(this.dir,this.length);
		let pos = addVector(this.pos,nextDir);
		return new Branch(this,pos,copy(this.dir),this.size * 0.98);
	}

	draw(ctx){
		if(this.bushCounter > 0 && !this.noBush) this.bushCounter--;

		if(this.bushCounter === 0){
			this.bloomed = true;
		}

		if(this.parent === null) return;
		ctx.lineWidth = this.size;
		ctx.strokeStyle = color(255);
		ctx.fillStyle = color(255);
		ctx.beginPath();
		ctx.moveTo(this.pos.x,this.pos.y);
		ctx.lineTo(this.parent.pos.x,this.parent.pos.y);
		ctx.stroke();
		ctx.ellipse(this.pos.x,this.pos.y,this.size / 2,this.size / 2,0,Math.PI * 2,0);
		ctx.fill();
	}

	drawFlower(ctx){
		ctx.fillStyle = '#ff00ba';
		ctx.beginPath();
		ctx.ellipse(this.target.x,this.target.y,this.bushSize * this.ratio,this.bushSize * this.ratio,0,Math.PI * 2,0);
		ctx.fill();
	}

	reset(){
		this.dir = copy(this.original_dir);
		this.count = 0;
	}
}

function addVector(v1,v2){
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	};
}

function mult(v,scale){
	return {
		x: v.x * scale,
		y: v.y * scale
	};
}

function copy(object){
	let obj = {};
	for(const prop in object){
		obj[prop] = object[prop];
	}
	return obj;
}