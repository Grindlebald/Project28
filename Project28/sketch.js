const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2,mango3;

var stone, thrower, treeImg;

function preload() {    
    treeImg=loadImage('lol/tree.png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);



    mango1 = new Mango(700, 210);


    mango2 = new Mango(800, 200);

    mango3 = new Mango(900, 230);
    stone = new Stone(240,294);

    //log6 = new Log(230,180,80, PI/2);
    thrower = new Thrower(stone.body,{x:240, y:294});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    image(treeImg,600,90,350,350);
    ground.display();
    mango2.display();

    mango1.display();



    mango3.display();
    stone.display();
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    //log6.display();
    thrower.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    thrower.fly();
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stone.body, {x: 240, y: 294});
        thrower.attach(stone.body)
    }
}

function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position 
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false)
    }
}