let angle = 0;

function setup() {
  createCanvas(1536, 759, WEBGL);
}

function draw() {
  background(150, 0, 225);

  //translate(0,0,mouseX);

  normalMaterial();

  //stroke(0);
  noStroke();

  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 0.4);
  rotateZ(angle * 0.2);
  torus(150, 20);


  angle += 0.05;
}
