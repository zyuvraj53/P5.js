var kitten;

function setup() {
  createCanvas(1024, 512);
  background(220);
  image(kitten, 0, 0);
  kitten2 = loadImage('kitten2.jpg');
}
function preload() {
  kitten = loadImage("kitten.jpg");
}

function draw() {
  image(kitten2, 512, 0);
}
