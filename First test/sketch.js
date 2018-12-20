let sizeX = window.innerWidth;
let sizeY = window.innerHeight;

function setup() {
  createCanvas(sizeX, sizeY);
}

function draw() {
  background(255,255,255);

  strokeWeight(5);
  noFill();
  // ellipse(sizeX/2,sizeY/2,abs(mouseX-sizeX/2)*2,abs(mouseY-sizeY/2)*2);
  strokeWeight(2);
  fill(255,0,0);
  ellipse(mouseX,mouseY,50);
}
