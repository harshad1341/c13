var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var Obstecles,obsteclesgroup , obsteclesImage


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obsteclesImage = loadImage("obstacle1.png")
  obsteclesImage2 = loadImage("obstacle2.png")
  obsteclesImage3 = loadImage("obstacle3.png")
  obsteclesImage4 = loadImage("obstacle4.png")
  obsteclesImage5 = loadImage("obstacle5.png")
  obsteclesImage6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstecles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
   }
    function spawnObstecles (){
  if(frameCount % 50 === 0){

    obstecles = createSprite(600,155,30,10)
    var rand = Math.round( random (1,6) )
    switch(rand){
    case 1: obstecles.addImage (obsteclesImage);
    break;
    case2: obstecles.addImage (obsteclesImage2);
    break;
    case 3: obstecles.addImage(obsteclesImage3);
    break;
    case 4: obstecles.addImage(obsteclesImage4);
    break;
    case 5: obstecles.addImage(obsteclesImage5);
    break;
    case 6: obstecles.addImage(obsteclesImage6);
    break;
    default:break

    }
    obstecles.scale = 0.5
    obstecles.velocityX = -6
    obstecles.lifetime = 100
    
  }






    }


