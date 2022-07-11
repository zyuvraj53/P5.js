class Bubble {
  constructor() {
    this.x = 150;
    this.y = 200;
  }

  move() {
    this.x = this.x + random(5, -5);
    this.y = this.y + random(5, -5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

let bubbles = []

function setup() {
  createCanvas(1500, 800)

  for (let i = 0; i < 100; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(125, 0, 255);

  for(let i = 0; i < 100; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}
