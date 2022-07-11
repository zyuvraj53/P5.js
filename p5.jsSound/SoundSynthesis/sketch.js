var wave;
var button;
var playing;

function setup() {
  createCanvas(400, 400);
  wave = new p5.Oscillator();
  wave.setType("sine");

  button = createButton("play/pause");
  button.mousePressed(toggle);
}

function draw() {
  if (playing) background(125, 0, 255);
  else background(51);
}

function toggle() {
  if (!playing) {
    wave.start();
    wave.amp(0.5, 1);
    wave.freq(440);
    playing = true;
  } else {
    wave.amp(0, 1);
    playing = false;
  }
}
