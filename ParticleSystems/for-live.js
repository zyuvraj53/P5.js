class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 5;
  }

  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(200, 20));
  }

  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}