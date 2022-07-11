function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;

      var r = random(255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
