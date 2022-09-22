var lives = 0;

function setup() {
  frameRate(60);
  createCanvas(512, 512);
  background(200);
  x = random(30, 480);
  y = random(30, 480);
  x2 = random(40, 470);
  y2 = random(40, 470);
  x4 = random(40, 470);
  y4 = random(40, 470);
  x5 = random(40, 470);
  y5 = random(40, 470);
  d = 60;
  dm = 40;
  c = 0;
  speed = 5;
  speedup = speed;
  speeddown = speed;
  speedleft = speed;
  speedright = speed;
  speedx2 = random(2, 3);
  speedy2 = random(2, 3);
  speedx4 = random(2, 3);
  speedy4 = random(-2, -3);
  speedx5 = random(-2, -3);
  speedy5 = random(2, 3);
  width = 512;
  height = 512;
  img1 = loadImage("img/mouse.png");
  img2 = loadImage("img/cat.png");
  img3 = loadImage("img/grass.png");
}

function draw() {
  background(118, 179, 132);
  image(img3, 0, 0, width, height);

  c += 1 / 60;

  distance1 = ((x - x2) ** 2 + (y - y2) ** 2) ** 0.5;
  distance2 = ((x - x4) ** 2 + (y - y4) ** 2) ** 0.5;
  distance3 = ((x - x5) ** 2 + (y - y5) ** 2) ** 0.5;

  //collision check
  if (distance1 < (1 / 2) * d + (1 / 2) * dm) {
    x2 = random(30, 480);
    y2 = random(30, 480);
    fill(200, 200, 30);
    circle(x2, y2, 20);
    lives = lives - 1;
  }

  if (distance2 < (1 / 2) * d + (1 / 2) * dm) {
    x4 = random(30, 480);
    y4 = random(30, 480);
    fill(200, 200, 30);
    circle(x4, y4, 20);
    lives = lives - 1;
  }

  if (distance3 < (1 / 2) * d + (1 / 2) * dm) {
    x5 = random(30, 480);
    y5 = random(30, 480);
    fill(200, 200, 30);
    circle(x5, y5, 20);
    lives = lives - 1;
  }

  fill(200, 200, 30);
  circle(x2, y2, d);

  fill(200, 200, 30);
  circle(x4, y4, d);

  fill(200, 200, 30);
  circle(x5, y5, d);

  if (keyIsDown(LEFT_ARROW)) {
    x -= speedleft;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += speedright;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= speedup;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += speeddown;
  }
  fill(150, 150, 150);
  if (circle(x, y, dm));

  if (x + dm / 2 >= width) {
    speedright = 0;
  }
  if (x - dm / 2 <= 0) {
    speedleft = 0;
  }
  if (y + dm / 2 >= height) {
    speeddown = 0;
  }
  if (y - dm / 2 < 0) {
    speedup = 0;
  }
  if (x + dm / 2 <= width) {
    speedright = speed;
  }
  if (x - dm / 2 >= 0) {
    speedleft = speed;
  }
  if (y + dm / 2 <= height) {
    speeddown = speed;
  }
  if (y - dm / 2 > 0) {
    speedup = speed;
  }

  if (x2 > width - (1 / 2) * d || x2 < 0 + (1 / 2) * d) {
    speedx2 *= -1.05;
  } else if (y2 > height - (1 / 2) * d || y2 < 0 + (1 / 2) * d) {
    speedy2 *= -1.05;
  }

  if (x4 > width - (1 / 2) * d || x4 < 0 + (1 / 2) * d) {
    speedx4 *= -1.05;
  } else if (y4 > height - (1 / 2) * d || y4 < 0 + (1 / 2) * d) {
    speedy4 *= -1.05;
  }

  if (x5 > width - (1 / 2) * d || x5 < 0 + (1 / 2) * d) {
    speedx5 *= -1.05;
  } else if (y5 > height - (1 / 2) * d || y5 < 0 + (1 / 2) * d) {
    speedy5 *= -1.05;
  }

  image(img1, x - dm / 2, y - dm / 2, dm, dm);
  image(img2, x2 - d / 2, y2 - d / 2, d, d);
  image(img2, x4 - d / 2, y4 - d / 2, d, d);
  image(img2, x5 - d / 2, y5 - d / 2, d, d);

  fill(50);
  rect(0, 0, width, 30);
  fill(10);
  text("lives: " + lives, (width * 1) / 2, 40);
  text("score: " + floor(c) + " seconds", 20, 40);
  //Move
  x2 += speedx2;
  y2 += speedy2;
  x4 += speedx4;
  y4 += speedy4;
  x5 += speedx5;
  y5 += speedy5;

  if (lives < 1) {
    background(20, 20, 20);
    fill(255);
    c -= 1 / 60;
    text("you survived for: " + floor(c) + " seconds", 200, (height * 1) / 2);
    text("press ' r ' to start game", 200, (height * 1) / 1.8);
    image(img1, 100, 80, 150, 150);
    image(img2, 350, 60, 100, 100);
    image(img2, 70, 340, 120, 120);
    image(img2, 300, 320, 130, 130);
  }

  if (keyIsDown(82)) {
    lives = 3;
    x = random(30, 480);
    y = random(30, 480);
    x2 = random(40, 470);
    y2 = random(40, 470);
    x4 = random(40, 470);
    y4 = random(40, 470);
    x5 = random(40, 470);
    y5 = random(40, 470);
    speedx2 = random(2, 3);
    speedy2 = random(2, 3);
    speedx4 = random(2, 3);
    speedy4 = random(-2, -3);
    speedx5 = random(-2, -3);
    speedy5 = random(2, 3);
    c = 0;
  }
}
