const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
box2=new Box(250,375,50,50);
box3=new Box(250,325,50,50);
box4=new Box(250,275,50,50);
box5=new Box(400,225,350,25);
box1=new Box(350,375,50,50);
box6=new Box(350,325,50,50);
box7=new Box(400,275,150,25);
box8=new Box(450,375,50,50);
box9=new Box(450,325,50,50);
box10=new Box(550,375,50,50);
box11=new Box(550,325,50,50);
box12=new Box(550,275,50,50);
box13=new Box(400,200,50,50);
log1= new Log(300,175,125,PI/7);
log2=new Log(400,175,125,-PI/7);
ground1= new Ground(400,390,800,10)






}

function draw() {
 background(0);
    Engine.update(engine);
  
  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
   log1.display();
log2.display();
ground1.display();
  
 
  
  
}