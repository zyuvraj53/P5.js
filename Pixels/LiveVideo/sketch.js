var video;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  tint(255, 0, 125);
  image(video, 0, 0, mouseX, mouseY);
}
