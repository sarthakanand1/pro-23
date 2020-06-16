const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies;
var engine,world;
var wall1;

function setup() {
  engine=Engine.create();
world=Engine.world;
  createCanvas(400,400);

wall1= new Wall(40,285,40,220);
wall2= new Wall(75,300,40,190);
wall3= new Wall(200,320,210,150);
wall4= new Wall(305,300,40,190);
wall5= new Wall(325,285,40,220);
wall6=new Wall(180,356,60,70);
wall6.shapecolor="brown";
}

function draw() {
  Engine.update(engine);
  background("aqua"); 
  wall1.display(); 
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  
}