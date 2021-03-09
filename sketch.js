
// this is a silly example of using timers and clickables
// by joshua wilder oakley

//clickable library by: https://github.com/Lartu/p5.clickable
//timer classes by: https://github.com/scottkildall/Interaction_Design_Art385_SP21/tree/main/Timer%20Examples


//timer variables
var simpleTimer;
var simpleTimerTwo;
var waitForClick = true;

//image variable
var clickImg;
var posX = 0;

//button variables
var bttnX = 500;
var bttnY = 125;

// sound variable
var soundEffects = [];
var bSoundTriggered = false;

//text variable
var txt = 60;
var yStrt = 20;
var yInc = 250;

// color array
var theRnbw = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', 
'#0000FF', '#4B0082', '#9400D3', '#F144FD'];

//random color variable
var randCol;

//clickable variables
var introButton;
var secondButton;

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
  simpleTimer = new Timer(10000);
  simpleTimer.start();

//timer two
  simpleTimerTwo = new Timer(5000);
  simpleTimerTwo.start();

//intro buttom, clickable #1
  introButton = new Clickable();
  introButton.width = bttnX;
  introButton.height = bttnY;
  introButton.locate((windowWidth/2) - (introButton.width/2),
   (windowHeight/2) - (introButton.height/2 + 75));

//second button
  secondButton = new Clickable();
  secondButton.width = bttnX;
  secondButton.height = bttnY;
  secondButton.locate((windowWidth/2) - (introButton.width/2),
    (windowHeight/2) - (introButton.height/2 - 75));

//button functions  
introButton.onHover = function(){
  this.color = (theRnbw[0]);
  this.textColor = (theRnbw[1]);
}

introButton.onOutside = function(){
  this.color = (theRnbw[7]);
  this.textSize = txt;
  this.text = "press if you dare";
  this.textColor = (theRnbw[6]);
}

introButton.onPress = function() {
  this.stroke = (theRnbw[7]);
  this.textSize = txt;
  this.text = "boo";
  soundEffects[0].play()
}

secondButton.onHover = function(){
  this.color = (theRnbw[1]);
  this.textColor = (theRnbw[0]);
}

secondButton.onOutside = function(){
  this.color = (theRnbw[6]);
  this.textSize = txt;
  this.text = "press if you dare";
  this.textColor = (theRnbw[7]);
}

secondButton.onPress = function() {
  this.stroke = (theRnbw[6]);
  this.textSize = txt;
  this.text = "boo";
  soundEffects[1].play()
 }
}

// Draw code goes here
function draw() {
  background(theRnbw[rc]);
  
  if(waitForClick) {
    rainbowCircles();
 }
   else {
    updateTimerTwo();
    updateTimer();
 }
  introButton.draw(); 
  secondButton.draw(); 
}

// Looks for elapsed timefor timer one
function updateTimer() {
  if( simpleTimer.expired() ) {
    // textAlign(CENTER);
    stroke(5);
    fill(255);
    textSize(300);
    text('gotcha', width/2, yStrt);
    text('gotcha', width/2, yStrt + yInc);
    text('gotcha', width/2, yStrt + (yInc * 2)); 
    text('gotcha', width/2, yStrt + (yInc * 3));
    text('gotcha', width/2, yStrt + (yInc * 4)); 
    text('gotcha', width/2, yStrt + (yInc * 5));
    text('gotcha', width/2, yStrt + (yInc * 6));
}
else {
	fill(255);
    textSize(300);
    text( Math.round(simpleTimer.getRemainingTime()/1000), width/2, yInc);
 }
}

// Looks for elapsed timefor timer two
function updateTimerTwo() {
  if( simpleTimerTwo.expired() ) {
    rainbowCircles();
    drawBlueBerry();
}
else {
	fill(255);
	// textAlign(CENTER);
    textSize(300);
    text( Math.round(simpleTimerTwo.getRemainingTime()/1000), width/2, height-20);
 }
}

//dogs dancing across screen
function drawBlueBerry() {
  mv = random(-2, 2);

  image(clickImg, posX + mv, ((windowHeight/2) - (windowHeight/2) - mv));
  image(clickImg, posX - mv, ((windowHeight/2) - (windowHeight/4) + mv));
  image(clickImg, posX + mv, (windowHeight/2) - mv);
  image(clickImg, posX - mv, ((windowHeight/2) + (windowHeight/2) + mv));
  image(clickImg, posX + mv, ((windowHeight/2) + (windowHeight/4) - mv));

  posX += 4  
}
  
function mousePressed() {
	waitForClick = false;
	simpleTimerTwo.start();
	simpleTimer.start();	
}

function rainbowCircles() {

  var posY = 0;

  fill(theRnbw[0]);
  ellipse(width/2, height/2, windowHeight);
  fill(theRnbw[1]);
  ellipse(width/2, height/2, windowHeight - yInc);
  fill(theRnbw[2]);
  ellipse(width/2, height/2, windowHeight - (yInc * 2));
  fill(theRnbw[3]);
  ellipse(width/2, height/2, windowHeight - (yInc * 3));
  fill(theRnbw[4]);
  ellipse(width/2, height/2, windowHeight - (yInc * 4));
  fill(theRnbw[5]);
  ellipse(width/2, height/2, windowHeight - (yInc * 5));


}









