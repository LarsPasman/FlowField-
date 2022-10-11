var points = []
//mult is om de lijnen minder snel te laten ronddraaien
var mult = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

//loop om de punten vast te stellen 
  //je kan rondspelen met de density van de ballen
 var density = 20
 var space = width / density

  for(var x=0; x < width; x += space){
    for (var y = 0; y < height;y  += space){
      var p = createVector(x,y)
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  fill(255)

  for (var i = 0; i < points.length; i++){

//map is de verplaatsing van een object
  var angle = map(noise(points[i].x*mult,points[i].y*mult),0,1,0,720)
    
//hij maakt een lijn per punt die random naar links of rechts draait
  points[i].add(createVector(cos(angle),sin(angle)))
    ellipse(points[i].x,points[i].y,1)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = [];
  setup();
}
