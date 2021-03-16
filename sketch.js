  
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var girl,girlImg;
var ground, invisibleGround;
var sweetsGroup, sweets2Group, sweets3Group, sweet1, sweet2, sweet3;
var score;

function preload(){
  backgroudImg = loadImage("Images/Candyland.jpg")

  girlImg = loadImage("Images/Girl.png");
  
  sweet1Img = loadImage("Images/Sweet(1).png");
  sweet2Img = loadImage("Images/Sweet(2).png");
  sweet3Img = loadImage("Images/Sweet(3).png");
}

function setup() {
  createCanvas(1200,625);
  
  girl = createSprite(150,displayHeight-350,20,50);
  girl.addImage("girl", girlImg);

  girl.scale = 0.5;
  
  ground = createSprite(200,displayHeight-350,400,20);
  ground.x = ground.width /2;
  ground.visible = false;

  invisibleGround = createSprite(200,displayHeight-220,400,10);
  invisibleGround.visible = false;
  
  sweetsGroup = createGroup();
  sweets2Group = createGroup();
  sweets3Group = createGroup();
  
  girl.setCollider("rectangle",10, 120, 400, 100, 00);
  girl.debug = true
  
  score = 0;
  
}

function draw() {
  
  background(backgroudImg);
  fill("hotpink");
  textSize(30);
  text("Candy collected!🍭: "+ score, 830,100);
  
  
  if(gameState === PLAY){
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& girl.y >= 159) {
        girl.velocityY = -12;
    }
    
    girl.velocityY = girl.velocityY + 0.8


  if(sweetsGroup.isTouching(girl)){
    sweetsGroup.destroyEach();
    score++;
  }

  if(sweets2Group.isTouching(girl)){
    sweets2Group.destroyEach();
    score++;
  }

  if(sweets3Group.isTouching(girl)){
    sweets3Group.destroyEach();
    score++;
  }
  
    spawnSweets();
    spawnSweets2();
    spawnSweets3();
 
   girl.collide(invisibleGround);
  
  


  drawSprites();
}

function spawnSweets(){
  if(World.frameCount%100 === 0){
    sweet1 = createSprite(600,500,20,20);
    sweet1.scale = 0.5;
    sweet1.addImage("sweet",sweet1Img);
    sweet1.velocityX = -5;
    sweet1.setLifetime = 50;
    
    sweetsGroup.add(sweet1);
  }
}
function spawnSweets2(){
  if(World.frameCount%220 === 0){
    sweet2 = createSprite(600,500,20,20);
    sweet2.scale = 0.5;
    sweet2.addImage("sweet",sweet2Img);
    sweet2.velocityX = -5;
    sweet2.setLifetime = 50;
    
    sweets2Group.add(sweet2);
  }
}
function spawnSweets3(){
  if(World.frameCount%300 === 0){
    sweet3 = createSprite(600,500,20,20);
    sweet3.scale = 0.5;
    sweet3.addImage("sweet",sweet3Img);
    sweet3.velocityX = -5;
    sweet3.setLifetime = 50;
    
    sweets3Group.add(sweet3);
  }
}
}
