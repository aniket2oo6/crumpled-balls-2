
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1,dustbin2,dutbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,660,25);
	ground1 = new Ground(400,670,800,30);
	dustbin1 = createSprite(780,620,20,70);
	dustbin2 = createSprite(710,620,20,70);


	Engine.run(engine);
  
}


function draw() {

	background(0);
	Engine.update(engine);
	
	ground1.display();
	paper1.display();
  
    drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-85})
	}
}