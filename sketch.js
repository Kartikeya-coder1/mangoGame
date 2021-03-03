var falseground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var sling,sling2;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(950,120,30);
	mango2=new mango(1055,135,30);
	mango3=new mango(1175,105,30);
	mango4=new mango(1120,200,30);
	mango5=new mango(1200,190,30);
	mango6=new mango(960,210,30);
	mango7=new mango(900,180,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	//falseground=new ground(230,550,50,05)
	
	stoneObj=new Stone(230,400,40)

	sling=new Elastic(stoneObj.body,{x:235,y:420})


	// if(keyPressed("space")){
	// 	sling2=new Elastic(stoneObj.body,{x:235,y:420})
	// }


	Engine.run(engine);

}

function draw() {

  background("cyan");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  


//  if(stoneObj.y <= 200){
//  	stoneObj.x = boy.x 
//  	stoneObj.y = boy.y
// 	boy.x = stoneObj.x 
// 	boy.y = stoneObj.x 
//  }

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
 // falseground.display();
  stoneObj.display();
  sling.display();

// DETECTING COLLISION:
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5); 
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
 }

 
 function mouseReleased(){
	sling.fly();
}




// DETECTING COLLISION

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position 
	stoneBodyPosition = lstone.body.position 

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y) 
	console.log(distance)
	if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body , false);
}
}




function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x: 235 , y: 420});
		sling.attach(stoneObj.body);
		
	}
}



