
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  

}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  hr=hour();
  sc=second();
  mn=minute();
  strokeWeight(8)
  noFill();

  stroke('blue');
  scAngle=map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(scAngle);
  line(0,0,120,0);
  pop();

  stroke('cyan');
  mnAngle=map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(mnAngle);
  line(0,0,90,0);
  pop();

  stroke('red');
  hrAngle=map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  line(0,0,70,0);
  pop();

  stroke('white')
  ellipse(0,0,5,5);
  
  
  drawSprites();
}