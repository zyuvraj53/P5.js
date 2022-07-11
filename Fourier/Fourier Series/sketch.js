var time = 0;
// var radius;

let wave = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  translate(150, 200);
  // radius = 100; //radius of the largest circle

  let x = 0;
  let y = 0;
  // n = 2;
  for (let i = 0; i < 3; i++) {
    let prevX = x;
    let prevY = y;
    let n = 2 * i + 1;
    let radius = 75 * (4 * (n / PI));
    x += radius * cos(n * time); //This tells us about the y of the circle at any one point in time
    y += radius * sin(n * time); //This tells us about the x of the circle at any one point in time
    
    stroke(255, 100); //This is the drawing
    noFill(); //of the first circle
    ellipse(prevX, prevY, radius * 2);
    
    stroke(255);
    // fill(255); //this draws the line between the
    line(prevX, prevY, x, y); //centre of the first circle and
    //the second one
    
    // ellipse(x, y, 8); //This is the drawing of the 2nd cirlce
    
  }
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  
  beginShape(); //This is connecting to the discreet points
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]); //of the wave
  }
  endShape();

  time += 0.01; //The speed of the transform

  if (wave.length > 300) wave.pop();
}
