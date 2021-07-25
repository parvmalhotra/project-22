var starImg,fairyImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg=loadAnimation("fairyImage1.png","fairyImg2.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800,600);

	//write code to play fairyVoice sound
    fairy = createSprite(300,490);
	//create fairy sprite and add animation for fairy
    fairy.addAnimation("fairyflying",fairyImg);
    fairy.scale=0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

Engine.update(engine)
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.velocityX=0;
  fairy.velocityY=0;

  if(keyDown(RIGHT_ARROW)){
	  fairy.velocityX=6
  } else if (keyDown(LEFT_ARROW)){
	  fairy.velocityX=-6
  } else if (keyDown(DOWN_ARROW)){
	  star.velocityY=3
  }
   if(star.y>470){
	   star.velocityY=0
   }

  drawSprites();

}
