
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon_img, polygon;
var sling_shot;
var ground, base;
var box, box2, box3, box4, box5;
var box6, box7, box8, box9;
var engine,world;
var score=0;

function preload(){

polygon_img=loadImage("polygon.jpeg")


}

function setup() {
  createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  box =new Box(330, 235, 30, 40)
  box2 = new Box (360, 235, 30, 40)
  box3 = new Box (390, 235, 30, 40)
  box4 = new Box (420, 235, 30, 40)
  box5 = new Box (450, 235, 30, 40)
  
  box6 = new Box (360, 195, 30, 40)
  box7 = new Box (390, 195, 30, 40)
  box8 = new Box (420, 195, 30, 40)
  
  box9 = new Box (390, 155, 30, 40)

  box10 = new Box (300, 275, 30, 40)
  box11 = new Box (330, 275, 30, 40)
  box12 = new Box (360, 275, 30, 40)
  box13 = new Box (390, 275, 30, 40)
  box14 = new Box (420, 275, 30, 40)
  box15 = new Box (450, 275, 30, 40)
  box16 = new Box (480, 275, 30, 40)

  polygon = Bodies.circle(50, 200, 20);
  World.add(world,polygon);
  
  sling_shot = new SlingShot(polygon, {x:100, y:200});

base = new Ground (600, 380, 100, 10)
  ground= new Ground (400, 380, 800, 10)

}

function draw() {
  background("Black");  
  drawSprites();
  Engine.update(engine);

  text("Score:"+score,750,40)
  
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  ground.display();
  base.display();

  box.score();
  box2.score();      
  box3.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();


  imageMode(CENTER);
  
  image(polygon_img, polygon.position.x,polygon.position.y,40,40)

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling_shot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling_shot.attach(polygon);
  }
}
async function getBackground_image()
{

var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var response_Json= await response.json();
var date_time = response_Json.datetime
var hour = date_time.slice (11,13)
console.log(date_time)

if (hour>=06&&hour<=19){

bg = "white"
}
else{

bg="black"


}
}
