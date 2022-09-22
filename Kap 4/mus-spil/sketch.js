
var scorep1 = 0
var scorep2 = 0


function setup() {
  createCanvas(512, 512);
  background(200);
  x = random(20,490);
  y = random(20,490);
  x1 = random(20,490);
  y1 = random(20,490);
  x2 = random(20,490);
  y2 = random(20,490);
  x4 = random(20,490);
  y4 = random(20,490);
  x5 = random(20,490);
  y5 = random(20,490);
}


function draw() {
  background(200,150,150);
  
  if (x > 512){
    x = 0
  }
  if (x1 > 512){
    x1 = 0
  }
  if (y > 512){
    y = 0
  }
  if (y1 > 512){
    y1 = 0
  }
  if (x < 0){
    x = 512
  }
  if (x1 < 0){
    x1 = 512
  }
  if (y < 0){
    y = 512
  }
  if (y1 < 0){
    y1 = 512
  }
  fill(0)
  text("player 1: "+scorep1, 0, height/4);
  text("player 2: "+scorep2, 0, height/2);

  distance1 = ((x-x2)**2+(y-y2)**2)**0.5
  distance2 = ((x1+25-x2)**2+(y1+25-y2)**2)**0.5
  distance3 = ((x-x4)**2+(y-y4)**2)**0.5
  distance4 = ((x1+25-x4)**2+(y1+25-y4)**2)**0.5
  distance5 = ((x-x5)**2+(y-y5)**2)**0.5
  distance6 = ((x1+25-x5)**2+(y1+25-y5)**2)**0.5
  //collision check
  if(distance1<30){
    x2 = random(20,490);
  y2 = random(20,490);
    fill(200,200,30)
  circle(x2,y2,20);
  scorep1 += 1
  }
  if(distance2<30){
    x2 = random(20,490);
  y2 = random(20,490);
    fill(200,200,30)
  circle(x2,y2,20);
  scorep2 += 1

  }
  if(distance3<30){
    x4 = random(20,490);
  y4 = random(20,490);
    fill(200,200,30)
  circle(x4,y4,20);
  scorep1 += 1

  }
  if(distance4<30){
    x4 = random(20,490);
  y4 = random(20,490);
    fill(200,200,30)
  circle(x4,y4,20);
  scorep2 += 1

  }
  if(distance5<30){
    x5 = random(20,490);
  y5 = random(20,490);
    fill(200,200,30)
  circle(x5,y5,20);
  scorep1 += 1

  }
  if(distance6<30){
    x5 = random(20,490);
  y5 = random(20,490);
    fill(200,200,30)
  circle(x5,y5,20);
  scorep2 += 1

  }


  fill(200,200,30)
  circle(x2,y2,20);

  fill(200,200,30)
  circle(x4,y4,20);

  fill(200,200,30)
  circle(x5,y5,20);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  fill(150,150,150);
  if (ellipse(x, y, 50, 50));


  if (keyIsDown(65)) {
    x1 -= 5;
  }

  if (keyIsDown(68)) {
    x1 += 5;
  }

  if (keyIsDown(87)) {
    y1 -= 5;
  }

  if (keyIsDown(83)) {
    y1 += 5;
  }
  fill(150,150,150);
  rect(x1,y1,50,50);

  
}