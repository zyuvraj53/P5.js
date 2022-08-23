let walker;

function setup() {
  pixelDensity(4);
  createCanvas(1000, 570);

  walker = new Walker(width / 2, height / 2);
}

function draw() {
  background(0);
  walker.show();
  walker.update();
}
