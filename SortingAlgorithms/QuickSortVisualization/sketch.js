let values = [];

let i = 0;
let w = 10;

function setup() {
  createCanvas(600, 400);
  values = new Array(floor(width / w));

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }

  frameRate(5);
}

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
