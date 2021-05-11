
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper1Object;
var dustbin1;
var ground;
var dustbin2;
var dustbin3;
var launcher1;

function preload()
{
	
}

function setup() {
  var canvas = createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;


	paper1Object = new Paper(75,300,70,70);
	dustbin1 = new Dustbin(500,580,200,20);
	ground = new Ground(400,600,800,20);
  dustbin2 = new Dustbin(400,500,20,150);
  dustbin3 = new Dustbin(600,500,20,150);
  launcher1 = new Launcher(paper1Object.body, {x:100,y:300})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");



  paper1Object.display();
 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  launcher1.display();

  

 


  drawSprites();
 
}

function mouseDragged(){

   Matter.Body.setPosition(paper1Object.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  
  launcher1.fly();
  
  }



