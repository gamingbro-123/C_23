const Engine = Matter.Engine; //laws of Physics
const World = Matter.World; // will apply the laws of physics on all the bodies inside the world
const Bodies = Matter.Bodies; //individual body properties


var engine, world;
var box, ground1;
var ball;
var box1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

 
box = new Box (200,100,60,70);
box1 = new Box (220,50,60,70);

ground1 = new ground(200,400,400,10);


  ball = Bodies.circle(100,200,20);
  World.add(world,ball)
  
}

function draw() {
  background(220,255,255);  
  
  Engine.update(engine);


  box.display();
  box1.display();
  ground1.display();
  
  rectMode(CENTER)



 
 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}