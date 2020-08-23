
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
function preload()
{  
monkey_running = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  
  createCanvas(600,600); 
  monkey = createSprite(150,400,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.3;
  
  obstacle = createSprite(400,452);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  
  
  banana = createSprite(500,150);
  banana.addImage(bananaImage);
  banana.scale = 0.2;
  
  ground = createSprite(0,500,1200,20);
  ground.x = ground.width /2;
  
  
}

function draw() {
 background("white");
  
  ground.velocityX=-10
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   ground.shapeColor=("red");

    
 drawSprites(); 
}
