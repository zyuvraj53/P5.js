import Tree from './tree.js';

window.width = 600;
window.height = 800;

const canvas = document.querySelector('#Game');
canvas.setAttribute('width',width);
canvas.setAttribute('height',height);
const ctx = canvas.getContext('2d');

window.color = function(value){
	return `rgb(${value},${value},${value})`;
}

let tree = new Tree();

window.tree = tree;

function update(){
	ctx.fillStyle = color(51);
	ctx.fillRect(0,0,width,height);

	tree.draw(ctx);

	requestAnimationFrame(update);
}
update();