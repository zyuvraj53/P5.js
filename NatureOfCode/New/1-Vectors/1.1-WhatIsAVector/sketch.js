let walker;

function setup() {
  pixelDensity(4);
  createCanvas(400, 400);

  walker = new Walker(width / 2, height / 2);
  background(0);
}

function draw() {
  walker.show();
  walker.update();
}
