//! The code written is wrong, only the leafs of the quadtree should contain the points, rather in this code, every branch, and its leafs contain the points, so in total if a space is divided in 4 subtrees, it actually contains, at maximum, 4*4 + 4 = 20 points, but it should actually just contain 16.

//~ However, we will just ignore this error for now, and move on to QuadTrees-2 with the same code.

//* This file is written with no p5 dependencies, (the show function actually does have p5 dependencies, but we will ignore that for now).

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  contains(point){
    return(point.x > this.x - this.w &&
           point.x < this.x + this.w &&
           point.y > this.y - this.h &&
           point.y < this.y + this.h);
  }
}

class QuadTree {
  constructor(boundary, n) {
    this.boundary = boundary;
    this.capacity = n;
    this.points = [];
    this.divided = false;
  }

  subdivide() {
    let x = this.boundary.x;
    let y = this.boundary.y;
    let w = this.boundary.w;
    let h = this.boundary.h;

    let ne = new Rectangle(x + w / 2, y - w / 2, w / 2, h / 2);
    let nw = new Rectangle(x - w / 2, y - w / 2, w / 2, h / 2);
    let se = new Rectangle(x + w / 2, y + w / 2, w / 2, h / 2);
    let sw = new Rectangle(x - w / 2, y + w / 2, w / 2, h / 2);

    this.northwest = new QuadTree(nw, this.capacity);
    this.northeast = new QuadTree(ne, this.capacity);
    this.southwest = new QuadTree(sw, this.capacity);
    this.southeast = new QuadTree(se, this.capacity);

    this.divided = true;
  }

  insert(point) {
    if (!this.boundary.contains(point)) {
      return;
    }

    if (this.points.length < this.capacity) {
      this.points.push(point);
    } else {
      if (!this.divided) {
        this.subdivide();
        this.divided = true;
      }
      this.northeast.insert(point);
      this.northwest.insert(point);
      this.southwest.insert(point);
      this.southeast.insert(point);
    }
  }

  show(){
    stroke(255);
    strokeWeight(1);
    noFill();
    rectMode(CENTER);
    rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);

    if(this.divided){
      this.northwest.show();
      this.northeast.show();
      this.southeast.show();
      this.southwest.show();
    }

    for(let p of this.points){
      strokeWeight(1);
      point(p.x, p.y);
    }
  }
}
