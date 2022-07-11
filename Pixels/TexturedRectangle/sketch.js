function setup() {
  createCanvas(600, 400);
  pixelDensity(1);

}

function mousePressed(){
  console.log(mouseX, mouseY);
}
var geo = new TexGeo();

function draw() {
  background(125, 0, 255);
  rectMode(CORNERS);

  geo.TexRect(100, 100, 200, 200);
          
}
