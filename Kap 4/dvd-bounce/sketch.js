let x;
let justHitRightWall;
let xspeed = 1;
let y;
let yspeed = 1;

function setup() { 
  createCanvas(600, 500);
  x = width / 2;
  y = height / 2;
} 

function draw() { 
  background(50);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  else if (y > height - 25 || y < 0 + 25){
    yspeed *= -1;
  }
  if (x > width - 25){
    fill(220,20,20)
  }
  if (x < 0 + 25){
    fill(20,220,20)
  }
  if (y > height - 25){
    fill(40,80,200)
  }
  if (y < 0 +25){
    fill (200,200,0)
  }
  //Move
  x += xspeed;
  y += yspeed;
  ellipse(x, y, 50, 50);
}