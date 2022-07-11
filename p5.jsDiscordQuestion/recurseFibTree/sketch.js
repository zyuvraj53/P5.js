var index = 0; 
var fibArray = [1,1];
var slider;

function generateFib(n){
  let a = 1;
  let b = 1;
  let c = 0;
  for(let i = 3; i<=n; i++){
   c = a + b;
   a = b;
   b = c;
   fibArray.push(c);
  }
}

function setup() {
  createCanvas(400, 400);
  generateFib(13);
  fibArray.reverse();
  for (let index = 0; index < fibArray.length; index++) {
    fibArray[index] /= 2;
    
  }
  console.log(fibArray);
  slider = createSlider(0, PI, PI/6, 0.001)
}

function draw() {
  background(0);
  stroke(255);
  translate(200,height);
  branch(0);
  
}

function branch (num) {
  // angle in radians
  var angle = slider.value();
  //drawing the line
  line (0,0,0, - fibArray[num]);
  translate(0, - fibArray[num]);
  

    if (fibArray[num] > 1) {
    push();
    rotate(angle)
    branch(num + 1)
    pop();
  
    push();
    rotate(-angle);
    branch(num + 1)
    pop();
    
  } 
}