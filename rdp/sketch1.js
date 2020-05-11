const allPoints = [];
let epsilon = 0;

function setup() {
  createCanvas(windowWidth, 500);
    for (let x = 0; x < width; x++) {
    const xval = map(x, 0, width, 0, 5);
    const yval = exp(-xval) * cos(TWO_PI*xval);
    const y = map(yval, -1, 1, height, 0);
    allPoints.push(createVector(x, y));
  }
}

function draw() {
  background(0);

  const rdpPoints = [];
 rdpPoints.push(allPoints[0]);
 rdp2(allPoints,0, allPoints.length-1,rdpPoints); 
 rdpPoints.push(allPoints[allPoints.length-1]);

  epsilon += 0.01;
  if (epsilon > 100) {
    epsilon = 0; 
  }

  //translate(0, -10);
  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let v of allPoints) {
    vertex(v.x, v.y);
  }
  endShape();
  
  //translate(0, 20);
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let v of rdpPoints) {
    vertex(v.x, v.y);
  }
  endShape();
  fill(255);
  noStroke();
  textSize(24);
  text("epsilon: " + nf(epsilon,2,2), 20, 25);
  text("n: " + rdpPoints.length, 20, 50);
}