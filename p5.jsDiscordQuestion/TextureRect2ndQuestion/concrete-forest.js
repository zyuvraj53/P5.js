const DEBUG_MODE = true;
const ART_BLOCKS_TEST_MODE = false;
const STATIC_TOKEN_DATA = false;
const QUICK_RENDER_MODE = false;
const HIGH_RES_PRINT_MODE = false;
//debugger;

function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = projectNum * 1000000 + Math.floor(Math.random() * 1000);
  return data;
}
if (!ART_BLOCKS_TEST_MODE) {
  var tokenData = genTokenData(99);
}
if (STATIC_TOKEN_DATA) {
  var tokenData = 0x0057f223ce178f1e41ff1aacf1b5b40f3ac33c27bb807cebac1e7632a0883447;
}
const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(tokenData.hash.slice(2 + j * 2, 4 + j * 2));
}
const decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});

var randomNumSeed = parseInt(tokenData.hash.slice(0, 16), 16);
var perNoiseSeed = parseInt(tokenData.hash.slice(17, 32), 16);
var DEFAULT_SIZE_X = 1300;
var DEFAULT_SIZE_Y = 2400;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var M_X = WIDTH / DEFAULT_SIZE_X;
var M_Y = HEIGHT / DEFAULT_SIZE_Y;
var MIN = Math.min(M_X, M_Y);
var buildings = [];
const buildingLimit = 155;
var geo = new TexGeo();

let yellow,
  orange,
  salmon,
  offwhite,
  mint,
  cyan,
  electricPink,
  red,
  grayConcrete,
  brownConcrete,
  c1,
  c2,
  bgColor;
// Gradient variables
let ox, oy, dx, dy;
let chaoticGrad = false;

function setup() {
  if (DEBUG_MODE) {
    setDeterministicSeed();
  }
  if (QUICK_RENDER_MODE) {
  }

  setColorCodes();
  setColorsUsed();

  // TODO: Consider 1000x2400 aspect ratio
  if (HIGH_RES_PRINT_MODE) {
    MIN = 1;
  }
  createCanvas(DEFAULT_SIZE_X * MIN, DEFAULT_SIZE_Y * MIN);

  smooth();
  randomSeed(randomNumSeed);
  background(0, 0, 28);

  //setGradientSpine();

  if (decPairs[31] > 256) {
    chaoticGrad = true;
  }

  for (var i = 0; i < buildingLimit; i++) {
    const buildingStartPos = setBuildingPos();
    const buildingStartSize = setBuildingSize();
    buildings.push(
      new Building(
        buildingStartPos.copy(),
        buildingStartSize.copy(),
        lerpColor(c1, c2, random(0, 1))
      )
    );
  }

  for (var i = 0; i < buildings.length; i++) {
    buildings[i].show(MIN, geo);
  }
}

function setColorCodes() {
  black = color("#000000");
  white = color("#FFFFFF");
  yellow = color("#FFEE00");
  orange = color("#FF7900");
  salmon = color("#db8459");
  offwhite = color("#e3b29a");
  mint = color("#00FE8B");
  cyan = color("#00EAFE");
  electricPink = color("#FF0064");
  red = color(255, 0, 0);
  grayConcrete = color(105, 96, 87);
  brownConcrete = color(112, 79, 46);
}

function setColorsUsed() {
  if (decPairs[21] > 240) {
    c1 = grayConcrete;
    c2 = brownConcrete;
    bgColor = offwhite;
  } else if (decPairs[21] > 200) {
    c1 = salmon;
    c2 = salmon;
    bgColor = offwhite;
  } else if (decPairs[21] > 150) {
    c1 = mint;
    c2 = cyan;
    bgColor = black;
  } else if (decPairs[21] > 80) {
    c1 = yellow;
    c2 = orange;
    bgColor = black;
  } else if (decPairs[21] > 60) {
    c1 = electricPink;
    c2 = electricPink;
    bgColor = black;
  } else if (decPairs[21] > 40) {
    c1 = red;
    c2 = red;
    bgColor = black;
  } else {
    c1 = black;
    c2 = black;
    bgColor = white;
  }
}

// Shadow effect
function shadow(x, y, blur, col) {
  drawingContext.shadowOffsetX = x;
  drawingContext.shadowOffsetY = y;
  drawingContext.shadowBlur = blur;
  drawingContext.shadowColor = col;
}

// Cancel shadow effect
function noShadow() {
  drawingContext.shadowOffsetX = null;
  drawingContext.shadowOffsetY = null;
  drawingContext.shadowBlur = null;
  drawingContext.shadowColor = null;
}

function generateChildBuilding(buildingParent) {
  var buildingPos, buildingSize, buildingDir, buildingDrag;
  const buildingVertexMin = 0.025;
  const buildingVertexMax = 0.35;

  const vertexNum = int(
    random(
      buildingParent.stepCount * buildingVertexMin,
      buildingParent.stepCount * buildingVertexMax
    )
  );
  buildingPos = buildingParent.vertices[vertexNum].copy();
  buildingSize = p5.Vector.sub(
    buildingParent.vertices[vertexNum - 1],
    buildingParent.vertices[vertexNum + 1]
  );
  if (int(random(0, 2)) == 0) {
    buildingSize = createVector(-buildingSize.y, buildingSize.x);
  } else {
    buildingSize = createVector(buildingSize.y, -buildingSize.x);
  }
  buildingSize = buildingSize
    .normalize()
    .mult(random(buildingStartSizeMin, buildingStartSizeMax));
  switch (int(random(0, 2))) {
    case 0:
      buildingDir = buildingDirEnum.left;
      break;
    case 1:
      buildingDir = buildingDirEnum.right;
      break;
  }
  buildingDrag = random(
    baseBuildingDrag * minDragFactor,
    baseBuildingDrag * maxDragFactor
  );

  var childBuilding = new Building(
    buildingPos.copy(),
    buildingSize.copy(),
    buildingDir,
    buildingDrag
  );

  return childBuilding;
}

function setBuildingPos() {
  const buildingPosXMin = 50;
  const buildingPosXMax = DEFAULT_SIZE_X - 50;
  const buildingPosYMin = 1150;
  const buildingPosYMax = DEFAULT_SIZE_Y + 750;
  var buildingPos = createVector(
    random(buildingPosXMin, buildingPosXMax),
    random(buildingPosYMin, buildingPosYMax)
  );
  return buildingPos;
}

function setBuildingSize() {
  const buildingSizeXMin = 250;
  const buildingSizeXMax = 450;
  const buildingSizeYMin = 450;
  const buildingSizeYMax = 1450;
  var buildingSize = createVector(
    random(buildingSizeXMin, buildingSizeXMax),
    random(buildingSizeYMin, buildingSizeYMax)
  );
  return buildingSize;
}

function setDeterministicSeed() {
  // Set Gradient Direction
  decPairs[17] = 222;
  // Start Side
  decPairs[18] = 122;
  // Set contourSpread
  decPairs[19] = 222;
  // contourSize
  decPairs[20] = 22;
  // Color palette
  decPairs[21] = 255;
}

function setGradientSpine() {
  if (decPairs[17] > 200) {
    ox = 0;
    oy = 0.2 * mapSizeY;
    dx = assumedSizeX;
    dy = mapSizeY - oy;
  } else if (decPairs[17] > 80) {
    ox = 0;
    oy = 0.5 * mapSizeY;
    dx = assumedSizeX;
    dy = mapSizeY - oy;
  } else {
    ox = 0;
    oy = 0.8 * mapSizeY;
    dx = assumedSizeX;
    dy = mapSizeY - oy;
  }
}

function project(originX, originY, destX, destY, pointX, pointY) {
  // Rise and run of line.
  var odX = destX - originX;
  var odY = destY - originY;

  // Distance-squared of line.
  var odSq = odX * odX + odY * odY;

  // Rise and run of projection.
  var opX = pointX - originX;
  var opY = pointY - originY;
  var opXod = opX * odX + opY * odY;

  if (chaoticGrad) {
    opXod = random(-1.3 * opXod, 1.3 * opXod);
  }

  // Normalize and clamp range.
  return constrain(opXod / odSq, 0.0, 1.0);
}

function draw() {}
