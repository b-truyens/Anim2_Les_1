function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(140);
  stroke(20, 120);
  strokeWeight(2);
  fill(0,0,0,122);
  // jo
  line(0, 0, 399, 399);
  rect(50, 100, 100);
  fill(0);
  rect(160, 100, 100);
  fill(200);
  // code wordt van boven naar onder ingelezen en uitgevoerd.
  rect(270, 100, 100);
  line(40, 210, 380, 210);
  line(40, 90, 380, 90);
  line(40, 90, 40, 210);
  line(380, 90, 380,210);
  // cicle
  fill(240);
  circle(200, 300, 100);
}
