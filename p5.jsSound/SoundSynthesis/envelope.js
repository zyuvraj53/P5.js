var wave;
var button;
var playing;
var env;

function setup() {
  createCanvas(400, 400);

  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 0.5);
  env.setRange(1.2, 0);

  wave = new p5.Oscillator();

  wave.setType("sine");
  wave.start();
  wave.freq(440);
  wave.amp(env);

  button = createButton("play/pause");
  keyPressed();
}

function draw() {
  if (playing) background(125, 0, 255);
  else background(51);
}

function keyPressed() {
  env.play();
}
// if (!playing) {
//   playing = true;
// } else {
//   wave.amp(0, 1);
//   playing = false;
// }
