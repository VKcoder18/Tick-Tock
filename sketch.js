const { listenerCount } = require("events");
const { rootCertificates } = require("tls");

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(200);  
  
  fill('white')
  strokeWeight(4)
  stroke('red')
  ellipse(400,400,700,700)

  noStroke();
  fill(0);
  textSize(35);
  textAlign(CENTER);
  text('12',400,150);
  text("3",650,400);
  text("6",400,650);
  text("9",150,400);

  text("1",540,200);
  text("2",620,283);
  text("4",620,513);
  text("5",540,600);
  text("11",260,200);
  text("10",180,283);
  text("8",180,513);
  text("7",260,600);

  var hr=hour();
  var m=minute();
  var s=second();


  var scAngle= map(s, 0,60,0,360);
  var mnAngle= map(m, 0,60,0,360);
  var hrAngle= map(hr%12, 0,12,0,360);

  translate(400,400);
  rotate(-90)


  push()
  rotate(scAngle)
  strokeWeight(3)
  stroke('blue')
  line(0,0,230,0)
  pop()
    
  push()
  rotate(mnAngle)   
  strokeWeight(3)
  stroke('red')
  line(0,0,180,0)
  pop()
  
  push()
  rotate(hrAngle)
  strokeWeight(3)
  stroke('yellow')
  line(0,0,130,0)
  pop()
  
}