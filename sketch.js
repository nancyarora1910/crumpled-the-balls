
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

var containerleft;
var containerright;
var containerbottom;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400)

	container = new Container(720,390,100,10);
	containerleft = new Container(10,200,20,400);
	containerright = new Container(390,200,20,400);
	//containerbottom = new Container();

	//Create the Bodies Here.

	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	};

ball= Bodies.circle(220,10,10,ball_options);
World.add(world,ball);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  left.show();
  right.show();

  container.show();
  left.show();
  right.show();
  bottom.show();
  
  Engine.update(engine);
  
  drawSprites();
  }

  function keyPressed() {
	if (keyCode ===UP_ARROW) {
			Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0});	
	}
}



