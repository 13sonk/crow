function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
		}
	}
}
function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx + slider1.value(), cloudy, 120, 50);
  ellipse(cloudx + 10 + slider1.value(), cloudy + 10, 145, 30);
  ellipse(cloudx - 20 + slider1.value(), cloudy + 10, 130, 40);
  ellipse(cloudx - 20+ slider1.value(), cloudy + 20, 150, 20);
}

