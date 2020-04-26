	
var bullet,wall,weight,speed,thickness
function setup() {
  var canvas = createCanvas(1600, 400);
  bullet = createSprite(50,200,50,20)
  weight=2200;
  speed=60;
  bullet.velocityX = 5;
  bullet.shapeColor = color("white")
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color("green")
  thickness  = 60
}


function draw() {
  background(0);  
  if(isTouching(wall,bullet)){
	 damage();
	 wall.velocityX = 0
	 bullet.velocityX  = 0;
  }
  drawSprites();
 
}


function isTouching(obj1,obj2){
	if(obj1.x-obj2.x<(obj1.width/2)+(obj2.width/2)){
	console.log("touches")
	return true
	}
}
function damage()
{
	
	var damage =Math.round(0.5 *weight * speed*speed/thickness)
	console.log(damage)

	if(damage>180)
	{
		wall.shapeColor=color("yellow");
	}

	if(damage<180 && damage>100)
	{
		wall.shapeColor=color("blue");
	}

	if(damage<100)
	{
		wall.shapeColor=color("lightgreen");
	}
}