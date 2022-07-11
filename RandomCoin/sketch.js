var img;
var coin;
var coinFlip;

var headsCount = 0;
var tailsCount = 0;

var headsImage;
var tailsImage;

var headsEllipse;
  var headsEllipseX = 10 + 220 + 25;
  var headsEllipseY = 220 + 25;
var tailsEllipse;
  var tailsEllipseX = 70 + 220 + 30 + 25;
  var tailsEllipseY = 220 + 25;

var isInsideHeads;
var isInsideTails;

var timesClicked = 0;
  var timesClickedOnHeads = 0;
  var timesClickedOnTails = 0;

var noOfDifferences = 0;
  var noOfDifferencesIfItWereHeadsEverytime = 0;

var hist = [];
  var recentHist = [];
  
function preload() {
  
  heads = loadImage("data/heads.png");
  tails = loadImage("data/tails.png");
  
}
  
function setup() {


  createCanvas(windowWidth, windowHeight);
  coin = ["heads", "tails"];

  ellipseMode(CENTER); //~ Means that the ellipse will be centered around the x and y coordinates, with the radius 50 / 2 = 25.
  noFill();
  noStroke();
  headsEllipse = ellipse(headsEllipseX, headsEllipseY, 50);
  tailsEllipse = ellipse(tailsEllipseX, tailsEllipseY, 50);
  fill(0);

  pixelDensity(9);

}

function show1() {

  if(timesClicked != 0){
    if (coinFlip == "heads") {
      image(heads, 400, 10, 50, 50);
    } else {
      image(tails, 400, 10, 50, 50);
    }
  }

  textSize(20);
  text("Choose heads or tails:", 10, 250);
  headsImage = image(heads, 10 + 220, 220, 50, 50);
  text("or", 10 + 220 + 60, 250);
  tailsImage = image(tails, 70 + 220 + 30, 220, 50, 50);

}

function show2(){

  push();
  textSize(25);
  text(`P(H by coin) = ${(headsCount/(headsCount + tailsCount)).toFixed(3)}`, 10 , 150);
  text(`P(T by coin) = ${(tailsCount/(headsCount + tailsCount)).toFixed(3)}`, 230  + 30, 150);
  pop();

  push();
  textSize(25);
  text(`P(H by user) = ${(timesClickedOnHeads/(headsCount + tailsCount)).toFixed(3)}`, 10 , 350);
  text(`P(T by user) = ${(timesClickedOnTails/(headsCount + tailsCount)).toFixed(3)}`, 230 + 30 ,350) ;
  pop();

  text(`Differences = ${noOfDifferences}`, 10, 400);
  text(`Differences if only heads were picked: ${noOfDifferencesIfItWereHeadsEverytime}`, 200, 400);
  text(`No. of times clicked = ${timesClicked}`, 10, 450);

}

function condition() {

  distFromHeads = dist(mouseX, mouseY, headsEllipseX, headsEllipseY);
  distFromTails = dist(mouseX, mouseY, tailsEllipseX, tailsEllipseY);

  if (distFromHeads < 25) {
    isInsideHeads = true;
  } else {
    isInsideHeads = false;
  }

  if (distFromTails < 25) {
    isInsideTails = true;
  } else {
    isInsideTails = false;
  }

  return { isInsideHeads, isInsideTails };

}

function arrayToString(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

function countHeadsAndTails(str){
  let heads = 0;
  let tails = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'H'){
      heads++;
    }else if(str[i] == 'T'){
      tails++;
    }
  }
  return {heads, tails};
}

function draw() {

  background(100);
  textSize(50);
  text("The coin shows:", 10, 50);

  show1();
  show2();

  recentHist_10 = hist.slice(hist.length - 10, hist.length);
  recentHist_5 = hist.slice(hist.length - 5, hist.length);

  recentHistStr_10 = arrayToString(recentHist_10);
  recentHistStr_5 = arrayToString(recentHist_5);

  noOfHeadsAndTails_10 = countHeadsAndTails(recentHistStr_10);
  noOfHeadsAndTails_5 = countHeadsAndTails(recentHistStr_5);

  let dp = 1;

  p10_H = (noOfHeadsAndTails_10.heads/10).toFixed(dp);
  p10_T = (noOfHeadsAndTails_10.tails/10).toFixed(dp);

  p5_H = (noOfHeadsAndTails_5.heads/5).toFixed(dp);
  p5_T = (noOfHeadsAndTails_5.tails/5).toFixed(dp);

  let padding = 20;

  text(`p_10(H) = ${p10_H}`, padding + 270, 80);
  text(`p_10(T) = ${p10_T}`, padding + 310 + 110, 80);

  text(`p_5(H) = ${p5_H}`, padding + 270, 110);
  text(`p_5(T) = ${p5_T}`, padding + 310 + 110, 110);


  text(`Recent history: ${recentHistStr_10}`, 10, 100);

  // console.log(recentHist);

}

function mousePressed() {

  timesClicked++;

  coinFlip = coin[Math.floor(Math.random() * 2)];
  if (coinFlip == "heads") {
    headsCount++;
    hist.push('H');
  } else {
    tailsCount++;
    noOfDifferencesIfItWereHeadsEverytime++;
    hist.push('T');
  }

  if(condition().isInsideHeads == true){
    timesClickedOnHeads++;
  }else if(condition().isInsideTails == true){
    timesClickedOnTails++;
  }

  if(condition().isInsideHeads == true && coinFlip == "tails"){
    noOfDifferences++;
  }else if(condition().isInsideTails == true && coinFlip == "heads"){
    noOfDifferences++;
  }

}
