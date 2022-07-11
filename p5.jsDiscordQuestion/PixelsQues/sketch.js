var video;

// function setup() {
//   createCanvas(640, 480);
// }

function setup() {
  video = createCapture(VIDEO);
  createCanvas(video.width, video.height);
  video.size(video.width, video.height);
  video.hide();
}

function draw() {
  background(220);
  
  image(video,0,0,width,height);
  
  push();
    noStroke();
    fill(getPixelAverage(mouseX*6,mouseY*6,25,video,true));
    rect(mouseX,mouseY,20,20);
  pop();
}

function getPixelAverage(_x,_y,_size,_img,_gray){
  pixelSwatch = _img.get(_x,_y,_x+_size,_y+_size);
  pixelCount = _size*_size;
  pixelSwatch.loadPixels();
  
  let r = 0;
  let g = 0;
  let b = 0;
  
  for(var i = 0; i <  pixelCount * 4; i += 4){
      r = r+pixelSwatch.pixels[i];
      g = g+pixelSwatch.pixels[i+1];
      b = b+pixelSwatch.pixels[i+2];
  }
  
  r = r/pixelCount;
  g = g/pixelCount;
  b = b/pixelCount;
  
  if(_gray){
    pixelGreyAvg = (r+g+b)/3;
    return pixelGreyAvg;
  }else{
    pixelAvg = color(r,g,b);
    console.log(pixelAvg);
    return pixelAvg;
  }
  
}
