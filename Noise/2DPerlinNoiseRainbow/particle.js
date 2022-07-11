// Particle System Simulation
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/syR0klfncCk
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-system-simulation.html
// https://editor.p5js.org/codingtrain/sketches/QRzgzQLnQ

class Particle {
  constructor() {
    this.pos = createVector(random(height), random(width));
    // this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.maxSpeed = 4;
    this.prevPos = this.pos.copy();
    this.h = 0;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxSpeed);
    this.acc.set(0, 0);
  }
  follow(vector) {
    var x = floor(this.pos.x / magnitude);
    var y = floor(this.pos.y / magnitude);

    var index = x + y * columns;
    var force = vector[index];
    this.applyForce(force);
  }
  show() {
    stroke(this.h, 255, 255, 5);
    this.h += 1;
    if(this.h > 255) this.h = 0;
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    // point(this.pos.x, this.pos.y);
    this.updatePrevPos();
  }
  applyForce(force) {
    this.acc.add(force);
  }
  updatePrevPos() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  edgesReappear() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrevPos();
    } else if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrevPos();
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrevPos();
    } else if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrevPos();
    }
  }
}
