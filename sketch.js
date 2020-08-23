const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,chain;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
   
  //Create the Bodies Here.
  bob1 = new Bob(400,600,2,2);
  bob2 = new Bob (600,600,2,2);
  log = new Log(400,200);
  chain = new Chain(bob1.body,log.body);
  chain = new Chain(bob2.body,log.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  bob1.display();
  bob2.display();
  log.display();
  chain.display();
  drawSprites();
 
} 



