//crow gif https://cdnb.artstation.com/p/assets/images/images/029/922/323/original/ly-amane-crow.gif
var gif;
const Y_AXIS = 1;
let b1, b2, c1, c2;

let cloudx = 50;
let cloudy = 200;
let x = 200;
let y = 300;

function preload() {
	crowgif = createImg("crow.gif", "");
	crowgif2 = createImg("crow2.gif", "");
	crowgif3 = createImg("crow3.gif", "");
	loop();
}

function setup() {
	createCanvas(650, 650);
	stroke(0)
	b1 = color(255);
	b2 = color(0);
	slider1 = createSlider(10, 500, 1);
	slider1.position(400, 50);


}

function draw() {
	push()
	fill(220);
	textSize(20)
	text('cloud position', 400, 40);
	pop();

	push();
	crowgif.position(x, 2 * sin(y) + 200);
	crowgif.size(200, 200);
	x = x - 0.02;
	crowgif2.position(0.5 * x, 0.5 * sin(y) + 200);
	crowgif2.size(50, 50);
	x = x - 0.03;
	crowgif3.position(0.5 * x, 4 * sin(y) + 200);
	crowgif3.size(100, 100);
	x = x - 0.03;
	pop();

	push();
	let hr = hour();
	let min = minute();
	let sc = second();
	c1 = color('hr');
	c2 = color('hr');

	if (hr < 6) {
		c1 = color("#6a0d83");
		c2 = color("#eeaf61");
	}
	if (5 < hr && hr < 16) {
		c1 = color("#fcffb5");
		c2 = color("#ffdd40");
	}
	if (15 < hr && hr < 18) {
		c1 = color("#eeaf61");
		c2 = color("#6a0d83");
	}
	if (17 < hr && hr < 24) {
		c1 = color("#483475");
		c2 = color("#070B34");
	}
	setGradient(20, 20, 350, 600, c1, c2, Y_AXIS);
	strokeWeight(4);
	stroke(51);
	rect(20, 20, 350, 600);
	pop();

	push();
	if (cloudx > 400) {
		x = 50;
	}
	scale(0.5);
	makeCloud(cloudx, cloudy - 30);
	makeCloud(cloudx + 150, cloudy + 10)
	cloudx = cloudx + 0.1;
	pop();

	push();
	stroke(220);
	fill(250);
	textSize(36)
	text(hr + ':' + min + ':' + sc, 135, 530);
	pop();

	push();
	translate(45, 40);
	angleMode(DEGREES);
	rotate(180);
	scale(0.2);
	stroke(220);
	triangle(58, 20, 86, 75, 30, 75);
	pop();
	push();
	translate(16, 25);
	scale(0.5);
	stroke(220);
	line(35, 20, 35, 35);
	translate(10, 0);
	line(35, 20, 35, 35);
	translate(5, -5);
	line(40, 20, 40, 40);
	pop();

	let xStart = 30;
	let xMax = 300;
	let xGap =40;
	
	for(let x = xStart; x < xMax; x = x + xGap) {
		push();
		translate(x, 570);
		noStroke();
		rect(0, 0, 20, 20);
		pop();

	}
}