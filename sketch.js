let timer = 4//120
let gameState=1
var clouds,clo;
var birds,birds1;
var birdimg;
var enmy
var tower;
var wall1,wall2,wall3,wall4;
var god,img;
var form;
var eagle;
var boom;
var c,b,b1
var redi=0;
var score=0;


function preload(){

  enmy=loadImage("red.jpg");
  tower1=loadImage("tw.png");
  birdimg=loadImage("bird.png");
  clo=loadImage("cloud2.png");
  img=loadImage("god.png");

  eagle=loadSound("eagle.mp3");
  boom=loadSound("boom.mp3");
  

  form=new Form();
}

function setup() {
  createCanvas(1600, 1100);




  clouds = new Group();
  birds = new Group();
  birds1 = new Group();



  

    player=createSprite(width/2,height/2,15,15);
player.shapeColor=("black");
player.addImage("bird", birdimg);
player.scale=0.1;




  tower=createSprite(1350,950,50,50);
  tower.addImage("red", tower1);
  tower.scale=0.5
  tower.setCollider ( "rectangle",  25 , 25,  50,  50 )
 


  for (var i = 0; i < 10; i++) {
     c = createSprite(
      random(width), random(0,height/2),
      random(25, 100), random(25, 100));
    c.shapeColor = color(random(200, 255));
    c.addImage("cloud",clo);
   c.maxSpeed =0;
    c.scale=0.20
    clouds.add(c);
  }

  for (var i = 0; i < 10; i++) {
     b = createSprite(
      random(0,width), random(height-200,height),
      random(2, 20), random(5, 50));
    b.shapeColor = color(255, 0, random(255));
  
      b.addImage(enmy);
      b.scale=0.03;
    b.maxSpeed =40;
    b.rotateToDirection = true;
    birds.add(b);
  }




  for (var i = 0; i < 10; i++) {
     b1 = createSprite(
      random(width), random(0,height),
      random(2 ,20), random(5, 50));
    b1.shapeColor = color(255, 0, random(255));
   
    b1.addImage(enmy);
    b1.scale=0.03;
    b1.maxSpeed =40 ;
    b1.rotateToDirection = true;
    birds1.add(b1);
  }


  god=createSprite(0,0);
  god.visible=false;
  god.addImage(img);
 
  





  
  


  


}











function draw() {

  background("#ADD8E6");


  if(gameState===1){
    form.display();
    c.visible=false;
  }

  if(gameState===2){
    form.hide();

  


    textAlign(CENTER, CENTER);
    textSize(50);
    text("TIME REMAINING FOR MIGHTY EAGLE:"+timer, 1050, 30);
  
    if (frameCount % 35 == 0 && timer > 0) { 
      timer --;
    }
  
    if(frameCount%300==0){
      for (var i = 0; i < 5; i++) {
        var b1 = createSprite(
          random(width), random(0,height),
          random(2 ,20), random(5, 50));
        b1.shapeColor = color(255, 0, random(255));
       
        b1.addImage(enmy);
        b1.scale=0.03;
        b1.maxSpeed =40 ;
        b1.rotateToDirection = true;
        birds1.add(b1);

        
      }
    }
  
    if (timer == 0) {
      
      god.attractionPoint(0.50,1350,950);
      eagle.play();
     // eagle.noLoop();
      god.visible=true;
      god.maxSpeed=100;
  
      if(god.isTouching(tower)){
       // eagle.stop();
       // god.destroy();
        tower.destroy();
        birds1.destroyEach();
        birds.destroyEach();
        clouds.destroyEach();
        boom.play();
        gameState=3
      }

    }
  
    player.x=mouseX;
    player.y=mouseY;
  
  
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].position.x += clouds[i].width * 0.01;
      if (clouds[i].position.x > width) {
        clouds[i].position.x = 0;
      }
    }
    for (var i = 0; i < birds.length; i++) {
      birds[i].attractionPoint(1.10, mouseX, mouseY);
    }
  
    for (var i = 0; i < birds1.length; i++) {
      birds1[i].attractionPoint(0.90, mouseX, mouseY);
    }
  
  }
  if(gameState===3){
    textAlign(CENTER);

    textSize(50);
    text("GMAE OVER",windowWidth/2-100,windowHeight/2-500)
  }


  if(gameState===4){
    textAlign(CENTER);
    fill("blue");
    textSize(50);
    text("HOW TO PLAY!",windowWidth/2-50,windowHeight/2-500)
  }

  if(player.isTouching(birds)||player.isTouching(birds1)){


  }

  if(gameState===5){

    textAlign(CENTER, CENTER);
    textSize(50);
   // text("TIME REMAINING FOR MIGHTY EAGLE:"+timer, 1050, 30);
  
    if (frameCount % 35 == 0 && timer > 0) { 
      timer --;
    }
  
    if(frameCount%300==0){
      for (var i = 0; i < 5; i++) {
        var b1 = createSprite(
          random(width), random(0,height),
          random(2 ,20), random(5, 50));
        b1.shapeColor = color(255, 0, random(255));
       
        b1.addImage(enmy);
        b1.scale=0.03;
        b1.maxSpeed =40 ;
        b1.rotateToDirection = true;
        birds1.add(b1);

        
      }
    }
  
    if (timer == 0) {
      
      god.attractionPoint(0.50,1350,950);
      eagle.play();
     // eagle.noLoop();
      god.visible=true;
      god.maxSpeed=100;
  
      if(god.isTouching(tower)){
       // eagle.stop();
       // god.destroy();
        tower.destroy();
        birds1.destroyEach();
        birds.destroyEach();
        clouds.destroyEach();
        boom.play();
        gameState=3
      }

    }
  
    player.x=mouseX;
    player.y=mouseY;
  
  
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].position.x += clouds[i].width * 0.01;
      if (clouds[i].position.x > width) {
        clouds[i].position.x = 0;
      }
    }
    for (var i = 0; i < birds.length; i++) {
      birds[i].attractionPoint(1.10, mouseX, mouseY);
    }
  
    for (var i = 0; i < birds1.length; i++) {
      birds1[i].attractionPoint(0.90, mouseX, mouseY);
    }
  
  
  if(gameState===3){
    textAlign(CENTER);

    textSize(50);
    text("GMAE OVER",windowWidth/2-100,windowHeight/2-500)
  }


 
  if(player.isTouching(birds)||player.isTouching(birds1)){


  }

  
  }
  drawSprites();






}