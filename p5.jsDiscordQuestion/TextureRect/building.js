class Building {
    constructor(pos, size, color) {
        this.pos = pos; // bottom center coord
        this.size = size; // w x h
        this.pos.x = this.pos.x - (this.size.x / 2.0);
        this.pos.y = this.pos.y - this.size.y;
        this.winColNum = int(random(1, 5));
        this.winRowNum = int(random(4, 9));
        this.windows = [];
        this.color = color;
}

    show(MIN, geo) {
        noStroke();
        rectMode(CORNERS);
        fill(this.color);
        shadow(0, 0, 32, color(0))
        //rect(this.pos.x*MIN, this.pos.y*MIN, this.size.x*MIN, this.size.y*MIN);
        geo.TexRect(this.pos.x*MIN, this.pos.y*MIN, (this.pos.x+this.size.x)*MIN, (this.pos.y+this.size.y)*MIN);
        for (var i = 0; i < this.windows.length; i++) {
            windows[i].show(MIN);
        }    
    }

}

const windowTypeEnum = Object.freeze({
    rect: 0,
    pane: 1,
    circle: 2,
});

class Window {
    constructor(pos, size) {
        this.pos = pos; // bottom center coord
        this.size = size;
        this.pos.x = this.pos.x - (this.size.x / 2.0);
        this.pos.y = this.pos.y - this.size.y;
        this.windowType = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    show(MIN) {
        noStroke();
        noShadow(); // TODO: Try small shadow 
        fill(255, 10);
        rect(this.pos.x*MIN, this.pos.y*MIN, this.size.x*MIN, this.size.y*MIN);
    }

}

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