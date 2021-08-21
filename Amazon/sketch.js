
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fridge_img, mobile_img, laptop_img, watch_img, camera_img, tv_img;
var fridge, mobile, laptop, watch, camera, tv;
function preload()
{
	fridge_img = loadImage("fridge.png");
	mobile_img = loadImage("mobile.png");
	laptop_img = loadImage("laptop.png");
	watch_img = loadImage("watch.png");
	camera_img = loadImage("camera.png");
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	fridge = createSprite(140,320);
	fridge.addImage(fridge_img)
	fridge.scale = 0.5

	mobile = createSprite(390, 300);
	mobile.addImage(mobile_img);
	mobile.scale = 0.37;

	laptop = createSprite(650,310);
	laptop.addImage(laptop_img);
	laptop.scale = 0.7;

	watch = createSprite(900,310)
	watch.addImage(watch_img);
	watch.scale = 0.37;

	camera = createSprite(1140,300);
	camera.addImage(camera_img);
	camera.scale = 0.5;


	var fride1 = createButton("BUY");
	fride1.position(125,520);

	var mobile1 = createButton("BUY");
	mobile1.position(380,520);
	
	var laptop1 = createButton("BUY");
	laptop1.position(640,520);
	
	var watch1 = createButton("BUY");
	watch1.position(890,520);

	var camera1 = createButton("BUY");
	camera1.position(1130,520);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  textSize(45);
  fill("Orange")
  text("AMAZON", 570,60);
  
  drawSprites();
 
}



