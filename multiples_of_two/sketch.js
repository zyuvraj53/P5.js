var n = 1;
var a = 0;
var b = 0;

function setup() {
}

function draw() {
  createCanvas(a, b);
  background(220);
  textSize(32);
	textAlign(CENTER);
	text(n, width/2, height/2);
  text("-" + n/2, width/4, height/2+32);
  text("to", width/2, height/2+32);
  text(n/2 -1, 3*width/4, height/2+32);
}

function mousePressed(){

n *=2;
a += 10;
b += 10;


}
