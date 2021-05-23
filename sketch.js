var a,b





function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 200, 80, 30);
  a.shapeColor = "blue";
  b = createSprite(200,200,50,80);
  b.shapeColor = 'red';

}

function draw() {
  background("yellow");
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.y-b.y )  
  if(a.x-b.x<b.width/2 + a.width/2
    && b.x - a.x<b.width/2 + a.width/2
    &&a.y - b.y<b.height/2 +a.height/2
    &&b.y - a.y<b.height/2 +a.height/2
    ){
      a.shapeColor = 'green';
      b.shapeColor = "cyan";


  }
  else{
    a.shapeColor = "blue";
    b.shapeColor = 'red';

  }

  drawSprites();
}