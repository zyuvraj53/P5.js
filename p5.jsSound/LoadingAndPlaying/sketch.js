var song;
var slider;


function preload() {
  
}

function p5GestureEventFunction() {
  p5.sound.init();
}

function setup() {
  createCanvas(400, 400);
  song = loadSound("../data/rainbow.mp3", loaded);
  slider = createSlider(0, 1, 0.1, 0.1);
}

function loaded() {
  song.play();
}

function draw() {
  background(125, 0, 255);
  song.setVolume(slider.value());
}
