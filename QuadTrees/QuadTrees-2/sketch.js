let qTree;
function setup() {
  frameRate(5);
  pixelDensity(4);
  createCanvas(400, 400);
  background(0);

  strokeWeight(1);
  let boundary = new Rectangle(200, 200, 200, 200);
  qTree = new QuadTree(boundary, 4);
  console.log(qTree);

  // for(let i = 0; i < 500; i++){
  //   let p = new Point(random(width), random(height));
  //   qTree.insert(p);
  // }

  // background(0);
  // qTree.show();
}

function draw(){
  if(mouseIsPressed){
    for(let i = 0; i < 3; i++){
      let m = new Point(mouseX + random(-10, 10), mouseY + random(-10, 10));
      qTree.insert(m);
    }
    background(0);
    qTree.show(); 
  }
}