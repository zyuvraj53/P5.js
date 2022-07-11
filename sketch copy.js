//global variables
var xoffset;
var yoffset;
var zoffset;
var noiseValue;
var increment = 0.1;
var magnitude = 20;
var columns, rows;
var framerate;
var vector;

//#define
let scl = magnitude;

function setup() {
  createCanvas(400, 400);
  columns = floor(width / magnitude);
  rows = floor(height / magnitude);
  framerate = createP("");
}

function draw() {
  // background(125, 0, 255 );
  background(0);
  // randomSeed(10);
  yoffset = 0;

  for (let y = 0; y < rows; y++) {
    xoffset = 0;
    for (let x = 0; x < columns; x++) {
      var index = (x + y * width) * 4;
      noiseValue = noise(xoffset, yoffset, zoffset) * 2* PI;
      vector = p5.Vector.fromAngle(noiseValue);
      xoffset += increment;
      fill(noiseValue);
      // rect(x * magnitude, y * magnitude, magnitude, magnitude);
      stroke(255);
      // noFill();
      push();
      translate(x * magnitude, y * magnitude);
      rotate(vector.heading());
      line(0, 0, magnitude, 0);

      pop();
    }
    yoffset += increment;
    zoffset += 0.01;
  }
  framerate.html(floor(frameRate()));
}
