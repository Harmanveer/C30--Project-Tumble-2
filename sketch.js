const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygonImg;
var polygon;

function preload()
{
   polygonImg = loadImage("sprites/polygon.png");
}

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  base1 = new Ground(390, 245,150,10);
  base2 = new Ground(600, 195,150,10);

  block1 = new box(330,235,30,40);
  block2 = new box(360,235,30,40);
  block3 = new box(390,235,30,40);
  block4 = new box(420,235,30,40);
  block5 = new box(450,235,30,40);

  block6 = new box(360,195,30,40);
  block7 = new box(390,195,30,40);
  block8 = new box(420,195,30,40);
  
  block9 = new box(390,155,30,40);

  block10 = new box(540,185,30,40);
  block11 = new box(570,185,30,40);
  block12 = new box(600,185,30,40);
  block13 = new box(630,185,30,40);
  block14 = new box(660,185,30,40);

  block15 = new box(570,145,30,40);
  block16 = new box(600,145,30,40);
  block17 = new box(630,145,30,40);
  
  block18 = new box(600,105,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() 
{
  background("black");  
  drawSprites();
  Engine.update(engine);

  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 20, 20);
}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingshot.attach(polygon.body);
    }
}