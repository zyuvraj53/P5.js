class Building {
  constructor(pos, size, color) {
    this.pos = pos; // bottom center coord
    this.size = size; // w x h
    this.effectiveHeight = size.y * 0.85; // w x h
    this.pos.x = this.pos.x - this.size.x / 2.0;
    this.pos.y = this.pos.y - this.size.y;
    this.winColNum = int(random(1, 5));
    this.winRowNum = int(random(4, 9));
    this.color = color;

    this.windows = [];
    var winWidth = random(25, 65);
    var winHeight = random(40, 90);
    var windowType = int(random(0, 3));
    for (var i = 0; i < this.winColNum; i++) {
      for (var j = 0; j < this.winRowNum; j++) {
        var winX = this.pos.x + ((i + 1) * this.size.x) / (1 + this.winColNum);
        var winY =
          this.pos.y + ((j + 1) * this.effectiveHeight) / (1 + this.winRowNum);
        this.windows.push(
          new Window(
            createVector(winX, winY),
            createVector(winWidth, winHeight),
            windowType
          )
        );
      }
    }
  }

  show(MIN, geo) {
    noStroke();
    fill(this.color, 255);
    shadow(0, 0, 32, color(0));
    //rect(this.pos.x*MIN, this.pos.y*MIN, this.size.x*MIN, this.size.y*MIN);
    geo.TexRect(
      floor(this.pos.x * MIN),
      floor(this.pos.y * MIN),
      floor((this.pos.x + this.size.x) * MIN),
      floor((this.pos.y + this.size.y) * MIN)
    );
    for (var i = 0; i < this.windows.length; i++) {
      this.windows[i].show(MIN);
    }
  }
}

const windowTypeEnum = Object.freeze({
  rect: 0,
  pane: 1,
  circle: 2,
});

class Window {
  constructor(pos, size, windowTypeEnum) {
    this.pos = pos; // bottom center coord
    this.size = size;
    this.pos.x = this.pos.x - this.size.x / 2.0;
    this.pos.y = this.pos.y - this.size.y;
    this.windowType = windowTypeEnum;
    this.acc = createVector(0, 0);
  }

  show(MIN) {
    noStroke();
    noShadow(); // TODO: Try small shadow
    fill(10, 105);
    rect(
      this.pos.x * MIN,
      this.pos.y * MIN,
      (this.pos.x + this.size.x) * MIN,
      (this.pos.y + this.size.y) * MIN
    );
  }
}

class TexGeo {
  TexRect(x1, y1, x2, y2) {
    rectMode(CORNERS);
    rect(x1, y1, x2, y2);

    loadPixels();
    for (let indexX = floor(x1); indexX < floor(x2); indexX++) {
      for (let indexY = floor(y1); indexY < floor(y2); indexY++) {
        let index = (indexX + indexY * floor(width)) * 4;
        //TODO: Add option for perlin noise
        var r = random(255) * 0.1;
        pixels[index + 0] = Math.max(pixels[index + 0] - r, 0);
        pixels[index + 1] = Math.max(pixels[index + 1] - r, 0);
        pixels[index + 2] = Math.max(pixels[index + 2] - r, 0);
        //pixels[index + 3] = 25;
      }
    }
    updatePixels();
  }
}
