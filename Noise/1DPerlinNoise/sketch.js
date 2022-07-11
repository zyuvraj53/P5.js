//global vars
var inc = 0.01;
var y;
var start = 0;

function setup() {
  createCanvas(400, 400);
  noiseDetail(9);
}

function draw() {
  background(125, 0, 255);
  stroke(255);
  noFill();

  var xoffset = start;

  beginShape();
  for(let x = 0; x < width; x++){
    stroke(255);

    //y = random(height);
    y = noise(xoffset)* height;
    vertex(x, y);

    xoffset += inc;
  }
  endShape();
  start += inc;
  //noLoop();
}
