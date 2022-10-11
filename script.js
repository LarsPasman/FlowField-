var points = []
//mult is om de lijnen minder snel te laten ronddraaien
var mult;

//random kleuren
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup() {
  createCanvas(windowWidth - 15, windowHeight - 15);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

//loop om de punten vast te stellen 
  //je kan rondspelen met de density van de ballen
 var density = random(30,80);
  console.log(density)
 var space = width / density

  for(var x=0; x < width; x += space){
    for (var y = 0; y < height;y  += space){
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }
  }

  //random kleuren
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  // random mult
  mult = random(0.002,0.01)
}

function draw() {
  noStroke()
  fill(255)

  for (var i = 0; i < points.length; i++){

//kleurtjes geven aan de lijnen per gebied
  var r = map(points[i].x,0,width,r1,r2)
  var g = map(points[i].x,0,height,g1,g2)
  var b = map(points[i].x,0,width,b1,b2)
  var alpha = map(dist(width/2,height/2 , points[i].x, points[i].y), 0 , 350, 255 , 0)
  fill(r , g , b , alpha);
    
//map is de verplaatsing van een object
  var angle = map(noise(points[i].x*mult,points[i].y*mult),0,1,0,720)
    
//hij maakt een lijn per punt die random naar links of rechts draait
  points[i].add(createVector(cos(angle),sin(angle)))

    if(dist(width/2,height/2 , points[i].x, points[i].y) < 400){
    ellipse(points[i].x,points[i].y,1)
  }
 }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = [];
  setup();
}

//als je muis klikt kan je de flowfield opslaan
function mouseClicked(){

  saveCanvas('FlowfieldByLars', 'png');
}

// drawBoxes(){
//   stroke(255);
//   strokeWeight(3);
//   rect(windowWidth/2+)
// }
