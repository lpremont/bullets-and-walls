var bullet,wall;
var speed,weight,thickness;

function setup() {
  background("black");
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,30,10);
  
  wall=createSprite(1500,200,thickness,height/2);

  bullet.velocityX = speed*0.5;
}

function draw() {
  background(0,0,0);  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    bullet.x=wall.x-(bullet.width+wall.width)/2;
  }

  drawSprites();
}