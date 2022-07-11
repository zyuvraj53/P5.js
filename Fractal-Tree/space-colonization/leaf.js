export default class Leaf{
	constructor(){
		let angle = Math.random() * 2 * Math.PI;
		let range = {x:2,y:3}
		let radiusRange = range.y * range.x / 
					(Math.sqrt(Math.pow(range.x*Math.cos(angle),2) + Math.pow(range.y*Math.sin(angle),2)));
		let radius = Math.random() * width / 2;
		this.pos = {x:radius * Math.cos(angle) + width / 2,y:radius * Math.sin(angle) + height / 2};
		this.reached = false;
	}

	draw(ctx){
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.ellipse(this.pos.x,this.pos.y,4,4,0,Math.PI * 2,0);
		ctx.fill();
	}
}