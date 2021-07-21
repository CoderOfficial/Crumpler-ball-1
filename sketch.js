
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;
var ground;

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ground = new Ground(400,600,1000,10);
	ground.shapeColor=color(0,0,100);
paper = new Paper(200,400,30)
    bin1 = new Bin(500,550,10,100);


	bin2 = new Bin(600,600,200,10);
	bin3 = new Bin(700,550,10,100);



	Engine.run(engine);
  
}

function draw() {


  rectMode(CENTER);
  keyPressed();
  background("indigo");
  Engine.update(engine);

  paper.display();
bin1.display();
bin2.display();
bin3.display();
  ground.display();
 
}
	function keyPressed(){
		if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-5})
		}

}


