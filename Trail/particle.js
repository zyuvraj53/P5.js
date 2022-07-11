//var gravity = 0.1;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    //this.ySpeed = 0;

    this.history = [];// new Array(1000);

    this.update = function () {
      this.y += random(-10, 10);
      this.x += random(-10, 10);

      var v = createVector(this.x, this.y);
      this.history.push(v);

      if (this.history.length > 35) {
        this.history.splice(0, 1);
      }
    };

    this.show = function () {
      noStroke();
      fill(0, 150);
      ellipse(this.x, this.y, 24, 24);

      for (let i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        fill(random(255));
        ellipse(pos.x, pos.y, i - 8, i - 8);
      }
    };


  }
}