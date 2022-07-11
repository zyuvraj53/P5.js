function setup() {
  createCanvas(1024, 512);
}

function draw() {
  let a = 75;
  let mapped = round(map(a, 0, 100, 0, 8));
  console.log(mapped);
}