const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	stones = new Stone(100,450,23);
	
	mango1 = new Mango(600,290,34);
	mango2 = new Mango(855,325,35);
	mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,36);

	attach = new Throw(stones.body,{x:100, y:465});
	
	tree.creatSprite(775,368);
	tree.addImage(treeimg);
	tree.scale = 0.42;

	boy.creatSprite(160,550);
	boy.addImage(boyimg);
	boy.scale = 0.13;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");
  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);	
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);

  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

}

function mouseDragged() {
	Matter.Body.setPosition(stones.body,{x:mouseX, y:mouseY});

}

function mouseReleased() {
update.fly();
}

function detectCollision(lstones,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance = dist(stonesBodyPosition.x, stonesBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstones.r) {
		Matter.Body.setStatic(lmango.body.false);
	   }
}

function keyPressed() {

	if(keyCode===32) {
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		launcher.attach(stones.body);

	}
}