var flower;

function preload() {
  flower = loadJSON("flower.json");
}

function setup(){
  createCanvas(400,400);

}
function draw() {
  background(0);

  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}