
//timer variables
var simpleTimer;
var simpleTimerTwo;
var waitForClick = true;

//image variable
var clickImg;
var posX = 0;


// sound variable
var soundEffects = [];
var bSoundTriggered = false;

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
  textAlign(CENTER);

//setting the random rainbow colors
  rc = random(theRnbw.length);
  rc = floor(rc);

//allocating timer itself and time in milliseconds
  simpleTimer = new Timer(5000);
  simpleTimer.start();

//timer two
  simpleTimerTwo = new Timer(10000);
  simpleTimerTwo.start();

//intro buttom, clickable #1
  introButton = new Clickable();
  introButton.width = 500;
  introButton.height = 125;
  introButton.locate((windowWidth/2) - (introButton.width/2),
   (windowHeight/2) - (introButton.height/2 + 100));

//second button
  secondButton = new Clickable();
  secondButton.width = 500;
  secondButton.height = 125;
  secondButton.locate((windowWidth/2) - (introButton.width/2),
    (windowHeight/2) - (introButton.height/2 - 100));

//button functions  
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
  soundEffects[0].play()
 }

secondButton.onHover = function(){
  this.color = (theRnbw[1]);
  this.textColor = (theRnbw[0]);
}

secondButton.onOutside = function(){
  this.color = (theRnbw[3]);
  this.textSize = txt;
  this.text = "press if you dare";
  this.textColor = (theRnbw[2]);
}
secondButton.onPress = function() {
  this.stroke = (theRnbw[4]);
  this.textSize = txt;
  this.text = "boo";
  soundEffects[1].play()
 }

}

// Draw code goes here
function draw() {
  background(theRnbw[rc]);

  updateTimer();
  updateTimerTwo();
  introButton.draw(); 
  secondButton.draw(); 
}

// Looks for elapsed timefor timer one
function updateTimer() {
  if( simpleTimer.expired() ) {
    textAlign(CENTER);
    fill(theRnbw[3]);
    textSize(300);
    text('gotcha', width/2, height/2 - 300);
    text('gotcha', width/2, height/2);
    text('gotcha', width/2, height/2 + 300); 
}
else {
	fill(theRnbw[1]);
	textAlign(CENTER);
    textSize(300);
    text( Math.round(simpleTimer.getRemainingTime()), width/2, 200);
 }
}

// Looks for elapsed timefor timer two
function updateTimerTwo() {
  if( simpleTimerTwo.expired() ) {
    drawBlueBerry();
}
else {
	fill(theRnbw[4]);
	textAlign(CENTER);
    textSize(300);
    text( Math.round(simpleTimer.getRemainingTime()/1000), width/2, 700);
 }
}

function drawBlueBerry() {

	mv = random(-1, 1);
    image(clickImg, posX + mv, 200 - mv);
    image(clickImg, posX - mv, 600 + mv);
    posX += 4  
}
  
function mousePressed() {
	waitForClick = false;
	simpleTimerTwo.start();
	simpleTimer.start();
	
}









