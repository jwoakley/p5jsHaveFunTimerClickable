
//timer variables
var simpleTimer;
var waitForClick = true;

var colorTimer = 0;

//image variable
var clickImg;

var posX = 0;
var poY = 0;

// sound variable
var soundEffects = [];

//text variable
var txt = 60;

// color array
var theRnbw = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

//random color variable
var randCol;

//clickable variables
var introButton;

//preload sound and images
function preload(){
  clickImg = loadImage('assets/dog.png');

  soundEffects[0] = loadSound('assets/evilLaugh.mp3');
  soundEffects[1] = loadSound('assets/circusDog.mp3');

  //disconnect default sound so we only hear it through reverb
  reverb = new p5.Reverb();
  reverb.process(soundEffects[0], 4, 1.5);
  reverb.amp(5);
}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

//setting the random rainbow colors
  rc = random(theRnbw.length);
  rc = floor(rc);

//allocating timer itself and time in milliseconds
  simpleTimer = new Timer(5000);
  simpleTimer.start();

//Create, style and resize clickables.
  introButton = new Clickable();
  introButton.width = 500;
  introButton.height = 125;
  introButton.locate(windowWidth/2, windowHeight/2);
  
introButton.onHover = function(){
  this.color = (theRnbw[0]);
  this.textColor = (theRnbw[1]);
}

introButton.onOutside = function(){
  this.color = (theRnbw[2]);
  this.textSize = txt;
  this.text = "press if you dare";
  this.textColor = (theRnbw[3]);
}

introButton.onPress = function() {
  this.stroke = (theRnbw[4]);
  this.textSize = txt;
  this.text = "boo";
  soundEffects[0].play();
 }
}



// Draw code goes here
function draw() {
  background(theRnbw[rc]);
  
  
  introButton.draw();
  updateTimer();
  
}

// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {

   mv = random(-1, 1);
    image(clickImg, posX + mv, 200 - mv);
    image(clickImg, posX - mv, 600 + mv);
    posX += 1

  
    soundEffects[1].play();
  }
}



  










