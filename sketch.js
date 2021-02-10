
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var boy,treep;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone;
var launcher;
function preload()
{
boy=loadImage("boy.jpeg");
treep=loadImage("tree.jpeg");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(400,496,2040,18)

  
  mango1=new Mango(700,240,40,40)
  mango2=new Mango(780,230,40,40)
  mango3=new Mango(700,150,40,40)
  mango4 =new Mango(760,150,40,40)
  mango5=new Mango(800,200,40,40)
  mango6=new Mango(890,190,40,40)
  mango7=new Mango(800,40,40,40)
  mango8=new Mango(850,80,40,40)

  stone=new Stone(90,370,40,40)

  launcher=new Launcher(stone.body,{x:105,y:370})
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  image(boy,50,316,240,240);
  image(treep,600,0,380,550);

  if(keyDown("space")){
    Matter.Body.setPosition(stone.body,{x:90, y:370})
   launcher.attach(stone.body);
  }
  drawSprites();
 ground.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();


 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
 detectcollision(stone,mango5)
 detectcollision(stone,mango6)
 detectcollision(stone,mango7)
 detectcollision(stone,mango8)
 stone.display()
 launcher.display();
}



function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function detectcollision(rock,mangos){
  mangoBodyPosition = rock.body.position
  stoneBodyPosition = mangos.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=mangos.r+rock.r)
  {
	  Matter.Body.setStatic(mangos.body, false);
  }
}
