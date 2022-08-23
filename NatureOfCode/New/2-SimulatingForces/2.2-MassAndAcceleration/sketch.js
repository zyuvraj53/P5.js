let moverA;
let moverB;

function setup() {
  pixelDensity(4);
  createCanvas((t = 400), t);

  moverA = new Mover(3*width/4, 200, 2);
  moverB = new Mover(width/4, 200, 4);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }
    let gravity = createVector(0, .2);

    let weightA = p5.Vector.mult(gravity, moverA.mass);
    let weightB = p5.Vector.mult(gravity, moverB.mass);

    moverA.applyForce(weightA);
    moverB.applyForce(weightB);

  moverA.show();
  moverA.edges();
  moverA.update();

  moverB.show();
  moverB.edges();
  moverB.update();
}
