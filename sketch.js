const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var drops,umbrella;
var drops=[];
var engine, world;
var rand;
var BestMan;
var maxDrops=100;
var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunder/1.png");
    thunder2 = loadImage("thunder/2.png");
    thunder3 = loadImage("thunder/3.png");
    thunder4 = loadImage("thunder/4.png");
    batAnimation = loadAnimation("bats/bat1.png","bats/bat2.png","bats/bat3.png","bats/bat4.png","bats/bat5.png","bats/bat6.png","bats/bat7.png","bats/bat8.png","bats/bat9.png","bats/bat10.png","bats/bat11.png","bats/bat12.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
    if(frameCount%200===0){
     for(i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
  }
    
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        rand=Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
    
    }
  


    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //display rain drops
    for(var i=0;i<maxDrops;i++)
 {
     drops[i].showDrops();
     drops[i].update();
 }   

    drawSprites();
}   

