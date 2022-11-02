var garden, gardenImg;
var bomb, bombImg;
var fruit1, fruit2, fruit3, fruit4, fruit5, fruitGroup, fruit, fruitImg;
var score=0;

var PLAY=1;
var END=0;
var gameState=1;




function preload(){
gardenImg = loadImage("garden.webp");
bombImg = loadImage("bomb.png");

fruit1 = loadImage("fruit1.png");
fruit2 = loadImage("fruit2.png");
fruit3 = loadImage("fruit3.png");
fruit4 = loadImage("fruit4.png");
fruit5 = loadImage("fruit5.png"); 


}

function setup() {
    createCanvas(600,300);
    
    garden = createSprite(550,250);
    garden.addImage("garden", gardenImg);
    garden.velocityX=-2;

    bomb = createSprite(100,100,10,10);
    bomb.addImage("bomb", bombImg);
    bomb.scale=0.04;

    fruitGroup=new Group();



 
}

function draw() {

    if(gameState===PLAY){
    background("white");
    
    if(garden.x < 400 ){
        garden.x = garden.width/2;
      }
   
    bomb.y=mouseY;

    spawnFruits();

    if (fruitGroup.isTouching(bomb)){
        for(var a=0;a<fruitGroup.length;a++){
        if (fruitGroup[a].isTouching(bomb)){
            fruitGroup[a].destroy()
            score=score+1;
        }
        }
        

        

    }
 
  

    drawSprites();
    fill("black");
    textSize(20);
    text("score: "+ score, 500,50);

}

function spawnFruits() {
    if(frameCount % 70 === 0){

fruit = createSprite(500,200,5,5);
fruit.y = Math.round(random(50,200));
fruit.velocityX=-2;
fruitGroup.add(fruit);

var rand = Math.round(random(1,5));
switch(rand) {
  case 1 : fruit.addImage(fruit1);
  fruit.scale=0.05;
  break;
  case 2 : fruit.addImage(fruit2);
  fruit.scale=0.03;
  break;
  case 3 : fruit.addImage(fruit3);
  fruit.scale=0.08;
  break;
  case 4 : fruit.addImage(fruit4);
  fruit.scale=0.02;
  break;
  case 5 : fruit.addImage(fruit5);
  fruit.scale=0.02;
  break;
  default: break;
}
fruit.lifetime=-1;

    }
}

}
