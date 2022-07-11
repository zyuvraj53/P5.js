var kitten;
var scale;

function setup() {
  createCanvas(1024, 512);
  background(220, 0, 125);
  image(kitten, 0, 0);
  scale = 25;
  color(GRAY);
}

function preload() {
  kitten = loadImage("kitten.jpg");
}

function index(x, y) {
  return (x + y * kitten.width) * 4;
}

function draw() {
  kitten.loadPixels();

  for (let y = 0; y < kitten.height; y++) {
    for (let x = 0; x < kitten.width; x++) {
      let oldR = kitten.pixels[index(x, y) + 0];
      let oldG = kitten.pixels[index(x, y) + 1];
      let oldB = kitten.pixels[index(x, y) + 2];

      let newR = (round(map(oldR, 0, 255, 0, scale)) * 255) / scale;
      let newG = (round(map(oldG, 0, 255, 0, scale)) * 255) / scale;
      let newB = (round(map(oldB, 0, 255, 0, scale)) * 255) / scale;

      kitten.pixels[index(x, y) + 0] = newR;
      kitten.pixels[index(x, y) + 1] = newG;
      kitten.pixels[index(x, y) + 2] = newB;
      kitten.pixels[index(x, y) + 3] = 255;

      let errR = oldR - newR;
      let errG = oldG - newG;
      let errB = oldB - newB;

      //----------------------------------------------------------

      let index = index(x + 1, y + 0);
      let cR = kitten.pixels[index(x, y) + 0];
      let cG = kitten.pixels[index(x, y) + 1];
      let cB = kitten.pixels[index(x, y) + 2];
      cR = cR + (errR * 7) / 16;
      cG = cG + (errG * 7) / 16;
      cB = cB + (errB * 7) / 16;
      kitten.pixels[index(x, y) + 0] = cR;
      kitten.pixels[index(x, y) + 1] = cG;
      kitten.pixels[index(x, y) + 2] = cB;
      kitten.pixels[index(x, y) + 3] = 255;

      //----------------------------------------------------------
      //----------------------------------------------------------

      let index = index(x - 1, y + 1);
      let cR = kitten.pixels[index(x, y) + 0];
      let cG = kitten.pixels[index(x, y) + 1];
      let cB = kitten.pixels[index(x, y) + 2];
      cR = cR + (errR * 3) / 16;
      cG = cG + (errG * 3) / 16;
      cB = cB + (errB * 3) / 16;
      kitten.pixels[index(x, y) + 0] = cR;
      kitten.pixels[index(x, y) + 1] = cG;
      kitten.pixels[index(x, y) + 2] = cB;
      kitten.pixels[index(x, y) + 3] = 255;

      //----------------------------------------------------------
      //----------------------------------------------------------

      let index = index(x + 0, y + 1);
      let cR = kitten.pixels[index(x, y) + 0];
      let cG = kitten.pixels[index(x, y) + 1];
      let cB = kitten.pixels[index(x, y) + 2];
      cR = cR + (errR * 5) / 16;
      cG = cG + (errG * 5) / 16;
      cB = cB + (errB * 5) / 16;
      kitten.pixels[index(x, y) + 0] = cR;
      kitten.pixels[index(x, y) + 1] = cG;
      kitten.pixels[index(x, y) + 2] = cB;
      kitten.pixels[index(x, y) + 3] = 255;

      //----------------------------------------------------------
      //----------------------------------------------------------

      let index = index(x + 1, y + 1);
      let cR = kitten.pixels[index(x, y) + 0];
      let cG = kitten.pixels[index(x, y) + 1];
      let cB = kitten.pixels[index(x, y) + 2];
      cR = cR + (errR * 1) / 16;
      cG = cG + (errG * 1) / 16;
      cB = cB + (errB * 1) / 16;
      kitten.pixels[index(x, y) + 0] = cR;
      kitten.pixels[index(x, y) + 1] = cG;
      kitten.pixels[index(x, y) + 2] = cB;
      kitten.pixels[index(x, y) + 3] = 255;

      //----------------------------------------------------------

      kitten.pixels[index(x + 1, y + 0)] = 0;
      kitten.pixels[index(x - 1, y + 1)] = 0;
      kitten.pixels[index(x + 0, y + 1)] = 0;
      kitten.pixels[index(x + 1, y + 1)] = 0;
    }
  }
  kitten.updatePixels();
  image(kitten, 512, 0);
  noLoop();
}
