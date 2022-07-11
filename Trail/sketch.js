var particles = [];

function setup() {
  createCanvas(500, 400);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(255, 0, 125);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

}

//hello, is this better than this?
