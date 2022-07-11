class TexGeo {
  
  TexRect(x1, y1, x2, y2) {
    rectMode(CORNERS);
    rect(x1, y1, x2, y2);

    loadPixels();
    for (let indexX = x1; indexX < x2; indexX++) {
      for (let indexY = y1; indexY < y2; indexY++) {
        let index = (indexX + indexY * width) * 4;

        var r = random(255);
        pixels[index + 0] = r;
        pixels[index + 1] = r;
        pixels[index + 2] = r;
        pixels[index + 3] = 255;
      }
    }
    updatePixels();
  }
}
