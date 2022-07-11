class Polygon {
  constructor(x, y, sides, size) {
    this.x = x;
    this.y = y;
    this.sides = sides;
    this.size = size;
  }
  generate() {
    const theta = random(TWO_PI);
    const n = this.sides;
    const r =
      (random(this.size) * 1) / cos((2 / n) * asin(sin((n / 2) * theta)));

    noStroke();
    fill(0, 0, 255);
    circle(this.x + r * cos(theta), this.y + r * sin(theta), 3);
  }
  draw() {
    push();
    translate(this.x, this.y);
    stroke(255);
    fill(255);
    const n = this.sides;
    for (let theta = 0; theta < TWO_PI; theta += 0.01) {
      const r = (this.size * 1) / cos((2 / n) * asin(sin((n / 2) * theta)));
      point(r * cos(theta), r * sin(theta));
    }
    pop();
  }
}

let pentagon;

function setup() {
  createCanvas(400, 400);
  pentagon = new Polygon(width / 2, height / 2, 5, 100);

  background(0);
  pentagon.draw();
  for (let i = 0; i < 100; i++) {
    pentagon.generate();
  }
}
