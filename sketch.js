var gameState = "LEVEL1";

var  ball;
var ground, groundImage;

var cloudsGroup, cloudImage;

var score=0;

var gameOver, restart;


function preload(){
  ballImg =   loadImage("ball.png");
  dotImg = loadImage("dot.jpg");
  
  groundImg = loadImage("ground.jpg");
  goalImg = loadImage("goal.png")
  
  player1Img = loadImage("player1.jpg");
  player2Img = loadImage("player2.jpg");

  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800, 600);
  
   
  ground = createSprite(400,300,400,20);
  ground.addImage("ground",groundImg);
  ground.scale=2.0

  ball = createSprite(397,520,20,50);
  ball.addImage(ballImg);
  ball.scale = 0.1;

  goal = createSprite(397,160,20,50);
  goal.addImage(goalImg);
  goal.scale = 0.375;
  //goal.debug = true
  goal.setCollider("rectangle",0,0,950,450)
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
 
  dotsGroup = new Group();
  playersGroup = new Group();
}

function draw() {
  background(255);
  text("GOAL: "+ score, 380,30);
  
  if (gameState==="LEVEL1"){

   if(ball.isTouching(goal)){
    score = score + 1;
    ball.x = 397
    ball.y = 520
    ball.velocityY=0
    gameState = "LEVEL2"
   }
    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }
  }
  else if (gameState === "LEVEL2") {

    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }
  }
  else if (gameState === "END") {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
     playersGroup.setVelocityXEach(0);
    
 
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
  
  drawSprites();
}


function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
}



