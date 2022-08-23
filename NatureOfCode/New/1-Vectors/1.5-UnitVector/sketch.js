function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  
  let v = p5.Vector.sub(mouse, pos);
  
  //> v.normalize();
  //> v.mult(50);
  //~ or
  v.setMag(50);
  //~ or
  //> or v.normalize().mult(50);
  
  strokeWeight(4);
  stroke(255);
  line(0, 0, v.x, v.y);
}
