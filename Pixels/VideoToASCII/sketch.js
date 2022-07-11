var video;
var vScale = 16;

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  textFont('courier');
}

function draw() {
  background(51);

  video.loadPixels();
  //loadPixels();

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width)*4;

      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r+g+b)/3;
      textSize(vScale);

      a = x * vScale;
      b = y * vScale;

      if(bright < 85){
        text('', a, b);//∙
      }else if(bright >= 85 && bright < 127){
        text('', a, b);//∘
      }else if(bright >= 127){
        text('0', a, b);
      }

      //var w = map(bright, 0, 255, 0, vScale);

      //noStroke();//comment out if you need boxes
      //fill(bright);
      //rectMode(CENTER);
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
  //updatePixels();
}
