var kitten;
var scale;

function setup() {
  createCanvas(1536, 512);
  background(220, 0, 125);
  image(kitten, 0, 0);
  scale = 1;
  //colorScale(GRAY);
}

function preload() {
  kitten = loadImage("kitten.jpg");
}

function draw() {

  kitten.loadPixels();

  for (let x = 0; x < kitten.width; x++) {
    for (let y = 0; y < kitten.height; y++) {
      let pixel = (x + y * kitten.width) * 4;

      let r = kitten.pixels[pixel + 0];
      let g = kitten.pixels[pixel + 1];
      let b = kitten.pixels[pixel + 2];

      r = round(map(r, 0, 255, 0, scale)) * 255 / scale;
      g = round(map(g, 0, 255, 0, scale)) * 255 / scale;
      b = round(map(b, 0, 255, 0, scale)) * 255 / scale;

      let bright = (r + g + b) / 3;

      kitten.pixels[pixel + 0] = bright;
      kitten.pixels[pixel + 1] = bright;
      kitten.pixels[pixel + 2] = bright;
      kitten.pixels[pixel + 3] = 255;

      let radius = map(bright, 0, 1, 0, scale);

      noStroke();
      noFill();
      //ellipseMode(CENTER);
      ellipse(x * scale + 1024, y * scale, radius);
    }
  }
  kitten.updatePixels();
  image(kitten, 512, 0);
}
