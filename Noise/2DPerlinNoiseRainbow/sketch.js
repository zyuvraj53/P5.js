//global variables
var xoffset;
var yoffset;
var zoffset = 0;
var noiseValue;
var increment = 0.1;
var magnitude = 20;
var columns, rows;
var framerate;
var vector;
var index;
var no_of_particles

var particles = [];
var flowfield = []; 

//#define
let scl = magnitude;

function setup() {
  
  // createCanvas(400, 400);
  createCanvas(innerWidth + 25, innerHeight); 
  colorMode(HSB, 255)

  columns = floor(width / magnitude);
  rows = floor(height / magnitude);

  // framerate = createP("");
  flowfield = new Array(columns * rows);

  for (let no_of_particles = 0; no_of_particles < 500; no_of_particles++) {
    particles[no_of_particles] = new Particle();
  }
  background(0);

}

function draw() {
  translate(20, 20);

  yoffset = 0;

  for (let y = 0; y < rows; y++) {

    xoffset = 0;
    for (let x = 0; x < columns; x++) {

      index = x + y * columns;
      noiseValue = noise(xoffset, yoffset, zoffset) * TWO_PI;
      vector = p5.Vector.fromAngle(noiseValue);

      vector.setMag(0.1);
      flowfield[index] = vector;
      xoffset += increment;

      fill(noiseValue);
      stroke(255, 50);
      strokeWeight(1)
      // push();
      // //----------------------------------------------
      // translate(x * magnitude, y * magnitude);
      // rotate(vector.heading());
      // line(0, 0, magnitude, 0);
      // //----------------------------------------------
      // pop();
    }
    yoffset += increment;
    zoffset += 0.0005;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].edgesReappear();
    particles[i].show();
    particles[i].update();
  }

  // framerate.html(floor(frameRate()));
}
