var rows, cols;
var cellSize = 10;
var grid = [];
let nums = [];
let currentCell = [];
var loopUntil = 999;

var primes = primesUptoN(loopUntil);

function setup() {
  createCanvas(400, 400);
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  background(220);

  for (let i = 0; i < cols; i++) {
    line(i * cellSize, 0, i * cellSize, height);
  }

  for (let i = 0; i < rows; i++) {
    line(0, i * cellSize, width, i * cellSize);
  }

  textSize(cellSize - 5);
  textAlign(CENTER, CENTER);
  fill(0);
  nums[0] = 1;
  loopUntil -= 2;
  currentCell[0] = nums[0];
  currentCell[1] = width / 2 - cellSize / 2;
  currentCell[2] = height / 2 - (cellSize / 2 - 2);
  push();
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(currentCell[1], currentCell[2] - 2, cellSize, cellSize);
  printCurrentCell(currentCell);
  fill(0);
  text(currentCell[0], currentCell[1], currentCell[2]);
  pop();
  printRight();
  let counter = 1;
  while (loopUntil > 0) {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= counter; j++) {
        if (i == 1) {
          printUpLeft();
          loopUntil--;
          if (loopUntil <= 0) break;
        } else if (i == 2) {
          printDownLeft();
          loopUntil--;
          if (loopUntil <= 0) break;
        } else if (i == 3) {
          printDownRight();
          loopUntil--;
          if (loopUntil <= 0) break;
        }
      }
      if (loopUntil <= 0) break;
    }
    if (loopUntil <= 0) break;
    printRight();
    loopUntil--;
    if (loopUntil <= 0) break;
    for (let i = 1; i <= counter; i++) {
      printUpRight();
      loopUntil--;
      if (loopUntil <= 0) break;
    }
    counter++;
    if (loopUntil <= 0) break;
  }
}

function printCurrentCell(currentCell) {
  push();
  rectMode(CENTER);
  noFill();
  text(currentCell[0], currentCell[1], currentCell[2]);
  pop();
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    rectMode(CENTER);
    rect(currentCell[1], currentCell[2] - 2, cellSize, cellSize);
    fill(0);
    text(currentCell[0], currentCell[1], currentCell[2]);
    pop();
  } else {
    text(currentCell[0], currentCell[1], currentCell[2]);
  }
}

function printRight() {
  currentCell[0] = currentCell[0] + 1;
  currentCell[1] = currentCell[1] + cellSize;
  currentCell[2] = currentCell[2];
  printCurrentCell(currentCell);
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    printCurrentCell(currentCell);
    pop();
  }
}

function printUpLeft() {
  currentCell[0] = currentCell[0] + 1;
  currentCell[1] = currentCell[1] - cellSize;
  currentCell[2] = currentCell[2] - cellSize;
  printCurrentCell(currentCell);
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    printCurrentCell(currentCell);
    pop();
  }
}

function printDownLeft() {
  currentCell[0] = currentCell[0] + 1;
  currentCell[1] = currentCell[1] - cellSize;
  currentCell[2] = currentCell[2] + cellSize;
  printCurrentCell(currentCell);
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    printCurrentCell(currentCell);
    pop();
  }
}

function printDownRight() {
  currentCell[0] = currentCell[0] + 1;
  currentCell[1] = currentCell[1] + cellSize;
  currentCell[2] = currentCell[2] + cellSize;
  printCurrentCell(currentCell);
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    printCurrentCell(currentCell);
    pop();
  }
}

function printUpRight() {
  currentCell[0] = currentCell[0] + 1;
  currentCell[1] = currentCell[1] + cellSize;
  currentCell[2] = currentCell[2] - cellSize;
  printCurrentCell(currentCell);
  if (primes[currentCell[0]] == true) {
    push();
    fill(125, 0, 255);
    printCurrentCell(currentCell);
    pop();
  }
}

// function draw() {
//   background(220);

//   for (let i = 0; i < cols; i++) {
//     line(i * cellSize, 0, i * cellSize, height);
//   }

//   for (let i = 0; i < rows; i++) {
//     line(0, i * cellSize, width, i * cellSize);
//   }

//   textSize(cellSize);
//   textAlign(CENTER, CENTER);
//   fill(0);
//   nums = fillArrayOfNums(1);
//   loopUntil = 50;
//   currentCell[0] = nums[0];
//   currentCell[1] = width / 2 - cellSize / 2;
//   currentCell[2] = height / 2 - (cellSize / 2 - 2);
//   printCurrentCell(currentCell);
//   printRight();
//   let counter = 1;
//   while (loopUntil > 0) {
//     for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= counter; j++) {
//         if (i == 1) {
//           printUpLeft();
//           loopUntil--;
//         } else if (i == 2) {
//           printDownLeft();
//           loopUntil--;
//         } else if (i == 3) {
//           printDownRight();
//           loopUntil--;
//         }
//       }
//     }
//     printRight();
//     loopUntil--;
//     for(let i = 1; i <= counter; i++){
//       printUpRight();
//       loopUntil--;
//     }
//     counter++;
//   }
// }
