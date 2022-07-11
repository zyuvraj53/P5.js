var angle;
var tree = [];
var leaves = [];

var count = 0;

function setup() {
  createCanvas(400, 400);

  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchRight());
      tree.push(tree[i].branchLeft());
    }
    tree[i].finished = true;
  }
  count++;

  if(count == 9){
    for(var i = 0; i < tree.length; i++){
      if(!tree[i].finished){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  
  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 4, 4); 
  }
}