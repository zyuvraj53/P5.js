let x, y;
let num = 1;
function setup() {
  createCanvas(500, 500);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255);
  text(num, x, y);
}