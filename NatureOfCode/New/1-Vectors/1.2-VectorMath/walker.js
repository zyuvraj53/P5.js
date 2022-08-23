class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }

  update() {
    this.pos.add(this.vel);
    //~ If I want to add the two vectors together, and store the result in a new vector, then I need to use the static version of the method add().
    //> this.pos = p5.Vector.add(this.pos, this.vel);
    // this.pos.x += this.vel.x;
    // this.pos.y += this.vel.y;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
