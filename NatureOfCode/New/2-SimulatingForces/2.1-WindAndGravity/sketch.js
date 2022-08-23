let mover;

function setup() {
  pixelDensity(4);
  createCanvas((t = 400), t);

  mover = new Mover(200, 200);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
    let gravity = createVector(0, .2);
    mover.applyForce(gravity);

  mover.show();
  mover.edges();
  mover.update();
}
