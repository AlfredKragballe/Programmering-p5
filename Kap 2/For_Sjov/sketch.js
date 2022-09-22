function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  background(200);
}

function draw() {
  frameRate(60);
  fill(255,255,255);
  if (keyIsPressed){
  if (keyCode === 70) {
    rect(mouseX-50, mouseY-50, 100, 100);
  } 
  if (keyCode === 67) {
    circle(mouseX,mouseY,90)
    }
  if (keyCode === 69) {{}
      ellipse(mouseX,mouseY,120,75)
    }}
    
}





