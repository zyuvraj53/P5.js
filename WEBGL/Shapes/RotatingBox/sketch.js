let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(150, 0, 225);

  translate(0,0,mouseX);

  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 0.4);
  rotateZ(angle * 0.2);
  box(100, 50, 100);


  angle += 0.05;
}
