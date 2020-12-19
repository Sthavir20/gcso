var car,wall
var speed,weight
function setup() {

  createCanvas(1000,400);
  car=createSprite(50, 100, 50, 50);
  wall=createSprite(900,100,60,100)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
  car.shapeColor="white"

}

function draw() {
  background(0); 
  if(wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX=0
    var def=0.5*weight*speed*speed/22500
  if(def>180){
    car.shapeColor="red"

  }
  if(def<180&&def>100){
    car.shapeColor="yellow"

  }
  if(def<100){
    car.shapeColor="green"

  }
  }
  drawSprites();
}