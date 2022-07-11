// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

var song;
var fft;
var button;
var w;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound("/p5.jsSound/data/this-dot-kp.mp3");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  button = createButton("toggle");
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0, 64);
  w = width / 64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  stroke(255);
  for (let i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    line(i * w, height, i * w, y);
  }

  console.log(spectrum);
  // volhistory.push(vol);
  stroke(255);
  noFill();
}

//   translate(width / 2, height / 2);
//   beginShape();
//   for (var i = 0; i < 360; i++) {
//     var r = map(volhistory[i], 0, 1, 10, 100);
//     var x = r * 4 * cos(i);
//     var y = r * 4 * sin(i);
//     vertex(x, y);
//   }
//   endShape();

//   if (volhistory.length > 360) {
//     volhistory.splice(0, 1);
//   }
//   //ellipse(100, 100, 200, vol * 200);
// }
