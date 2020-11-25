
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var div = [];
var particle;
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  for (var k = 0; k <=width, k = k + 80;) {
  div.push(new Div(k, height - divisionHeight/2, 10, divisionHeight));
}
  
  if(frameCount%10 === 0){
     
  }
}
function draw() {
  background("black");  
 
  drawSprites();
}

