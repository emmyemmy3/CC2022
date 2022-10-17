let fact;

//Thank you to CodingTrain for helping me figure out how to loadJSON
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON("https://uselessfacts.jsph.pl/random.json?language=en", getData);
}

function getData(data) {
  fact = data;
  console.log(data);
}

//displaying the API as text
function draw() {
  background(125);
  if (fact) {
    textSize(15);
    text(fact.text, 30, 200);
  }

  // new fact "button"
  fill(220);
  strokeWeight(10);
  rect(75, 250, 200, 70);

  fill(0);
  textSize(23);
  text("New Fact Please!", 85, 290);
}

//when mouse is pressed within the coordinates - the "button" I created, 
// calls the setup function, restarting the sketch and generating a new fact
function mousePressed() {
  if (mouseX > 75 && mouseX < 275 && mouseY > 250 && mouseY < 320) {
    setup();
  }
}