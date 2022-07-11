var mic;

// function p5GestureEventFunction() {
//   p5.sound.init();
// }

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(125, 0, 255 );
  var vol = mic.getLevel();

  ellipse(200, 200, vol*400, vol*400);
  console.log(vol); 
}
