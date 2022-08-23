let mover;

function setup() {
  pixelDensity(4);
  createCanvas((t = 400), t);

  mover = new Mover((3 * width) / 4, 200, 2);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  let gravity = createVector(0, 0.2);

  let weightA = p5.Vector.mult(gravity, mover.mass);

  mover.applyForce(weightA);

  mover.friction();
  mover.show();
  mover.edges();
  mover.update();
}
