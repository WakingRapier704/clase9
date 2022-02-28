var steve;

function preload(){
 chinaImg=loadImage("china.jpg")
}
function setup() {
  createCanvas(1000,400);
 steve=createSprite(200,200,30,30) 
}

function draw() 
{
  background(chinaImg);

  if(keyIsDown(RIGHT_ARROW)){
   steve.position.x=steve.position.x+5;  
  }

  if(keyIsDown(LEFT_ARROW)){
    steve.position.x=steve.position.x-5;  
   }

   if(keyIsDown(UP_ARROW)){
    steve.position.y=steve.position.y-5;  
   }

   if(keyIsDown(DOWN_ARROW)){
    steve.position.y=steve.position.y+5;  
   }

   edges=createEdgeSprites();
   steve.collide(edges);
   
  drawSprites();
}




