let cloudx = 100;
let cloudy = 100;

function setup() {
  createCanvas(800, 800);
	background(50);
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx + 10, cloudy + 10, 145, 30);
  ellipse(cloudx - 20, cloudy + 10, 130, 40);
}

function draw() {
  makeCloud(cloudx, cloudy-30);
  makeCloud(cloudx + 150, cloudy + 10)
	fill(200);
  cloudx=cloudx + 0.1;
}