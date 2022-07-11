var slider;
var angle;
var randomAngleArr;
var recurseCount;


function setup() {

  createCanvas(600, 400);

  slider = createSlider(0, PI, PI/4, 0.01);

  randomAngleArr = [];
  for(var i = 0; i < 20; i++){
    randomAngleArr.push(random(0, PI/6));
  } 

  randomLengthArr = [];
  for(var i = 0; i < 20; i++){
    randomLengthArr.push(random(0.6, 0.8));
  } 

}

function draw() {
  background(51);

  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(100);
  recurseCount = 0;
}

// function mousePressed() {
//   noLoop();
// }

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  recurseCount++;
  console.log("branch " + recurseCount);
  if (len > 2) {
    push();
      // rotate(angle);
      rotate(angle + randomAngleArr[recurseCount % 20]);
      branch(len * randomLengthArr[recurseCount % 20]);
    pop();

    push();
      // rotate(-angle);
      rotate(-angle - randomAngleArr[recurseCount % 20]);
      branch(len * randomLengthArr[recurseCount % 20]);
    pop();
  }
  
}
