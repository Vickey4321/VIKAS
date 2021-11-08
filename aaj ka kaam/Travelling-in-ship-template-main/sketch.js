var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
jaahag.png = loadAnimation("jaahag.png","jaahag.png","ship-2.png","jaahag.png");


}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.4;

  
  ship = createSprite(130,200,30,30);
 ship.addAnimation("viik.Imag");
  ship.scale =1;
  
}

function draw() {
  background(0);

  sea.velocityX = sea.velocityX + 0.1


if (sea.x < 0) {
  sea.x = sea.width / 9;
}

//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
 
  sea.velocityX =-4;


  
    
  drawSprites();
}
