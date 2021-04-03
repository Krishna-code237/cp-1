
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper = new Paper(100,600,10);
	ground = new Ground(400,500,800,20);

	//leftSide = new Dustbin(550,620,20,100);
	//bottom = new Dustbin(610,660,100,20);
	//rightSide = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(225);

  Engine.update(Engine);
  //paper.display();
  ground.display();

  //leftSide.display();
  //bottom.display();
  //rightSide.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:15,y: -15});

	}
}

