let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(150, 0, 225);

  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 1.7);
  rotateZ(angle * 0.5);
  rect(00, 00, 100, 100);


  angle += 0.07;
}
