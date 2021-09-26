const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, cannon, base ,angle, Cannonball;
angle=15

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(100, 210, 160, 250);
cannon = new Cannon(100,70,100,100,-PI/angle)
base = new cannonbase(100,60,150,100)
Cannonball = new CannonBall(cannon.x,cannon.y)
console.log(cannon.x)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,1000,400)
  Engine.update(engine);
    tower.display();
    cannon.display();
    base.display();
    Cannonball.display();


}

