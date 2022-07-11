var xoffset1 = 0;
var xoffset2 = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125, 0, 255);

  var x = map(noise(xoffset1), 0, 1, 0, width);
  var y = map(noise(xoffset2), 0, 1, 0, height);

  xoffset1 += 0.02;
  xoffset2 += 0.02;

  ellipse(x, y, 24);
}