var n = 0;
var c = 4;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);

  fill(n % 256,255, 255);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;

  ellipse(x, y, 8);

  n++;
}
