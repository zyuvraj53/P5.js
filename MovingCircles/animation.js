function setup() {
  createCanvas(1536, 759); //1536, 759

  var circleArray = [];

  for (let i = 0; i < 100; i++) {

    var x = Math.random() * width;
    var y = Math.random() * height;
    var dx = (Math.random() * 4 + 4);
    var dy = (Math.random() * 4 + 4);
    var radius = 30;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

if(a=== b){
  console.log("This is unacceptable"); 
}

function draw() {
  background(125, 0, 255);

  for (let i = 0; i < circleArray.length; i++){
    circleArray[i].draw();

    circleArray[i].update();
  }
}