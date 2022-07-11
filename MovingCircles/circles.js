class Circle {

  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
      stroke(10);
      fill(12);
      ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.update = function () {
      if (this.x + this.radius > 1536 || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > 759 || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;    }
  }
}