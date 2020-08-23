var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(400, 800,80,30);
  movingRect.shapeColor="blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 

  

  if ((movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2) 
  && (fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2)
  && (movingRect.y - fixedRect.y < fixedRect.width/2+movingRect.width/2) 
  && (fixedRect.y - movingRect.y < fixedRect.width/2+movingRect.width/2))
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  else
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
    
  drawSprites();
}
