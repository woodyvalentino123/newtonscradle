const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,chain;
var radius =20;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
   
  //Create the Bodies Here.
  bob1 = new Bob(300,650,radius);
  bob2 = new Bob (300,650,radius);
  bob3 = new Bob(300,650,radius);
  bob4 = new Bob (300,650,radius);
  bob5 = new Bob(300,650,radius);
  bob6 = new Bob (300,650,radius);
  bob7 = new Bob(300,650,radius);
  bob8 = new Bob (300,650,radius);
  log = new Log(400,100);
  chain1 = new Chain(bob1.body,log.body,-70,0);
  chain2 = new Chain(bob2.body,log.body,-50,0);
  chain3 = new Chain(bob3.body,log.body,-30,0);
  chain4 = new Chain(bob4.body,log.body,0,0);
  chain5 = new Chain(bob5.body,log.body,20,0);
  chain6 = new Chain(bob6.body,log.body,40,0);
  chain7 = new Chain(bob7.body,log.body,70,0);
  chain8 = new Chain(bob8.body,log.body,90,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  log.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  chain8.display();
  drawSprites();
  
  function keyPressed(){
    if(keyCode=== UP_ARROW){
      Body.applyForce(bob8.body,bob8.body.position,{x:25,y:-35})
    }
  }
 
} 



