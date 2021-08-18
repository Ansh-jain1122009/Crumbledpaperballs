
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	 ground = new Ground(width/2,390,width,20);
 	 wall = new Ground(500,350,10,60);
	 wall2 = new Ground(650,350,10,60);	 

  	ball=Bodies.circle(100,200,20,ball_options);  
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  wall.display();
  wall2.display();
  drawSprites();
 
}

function keypressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:-0.05});
	}	
}


