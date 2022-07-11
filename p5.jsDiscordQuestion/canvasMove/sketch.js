var img;
var cnv;
var newCanvasX;
var newCanvasY;
function preload() {
  img = loadImage("assets/heads.png");
}
//only run once
function setup() {
  cnv = createCanvas(img.width, img.height);
  background(img);
  // print(img.width, img.heigth)
  newCanvasX = (windowWidth - img.width) / 2;
  newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  //access the pixel information
  img.loadPixels();
  for (var col = 0; col < img.width; col++) {
    for (var row = 0; row < img.height; row++);
    {
      // var index = (col + row * img.width) * 4;
      // var r = img.pixels[index + 0];
      // var g = img.pixels[index + 1];
      // var b = img.pixels[index + 2];
      // var a = img.pixels[index + 3];
      let c = img.get(col, row);
      stroke(color(c));
      point(col, row);
    }
  }
  img.updatePixels();
}
