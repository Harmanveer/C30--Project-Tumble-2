class box
{
    constructor(x, y, width, height) 
    {
    var options = 
    {
        'restitution':0.8,
        'friction':1.0,
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image= loadImage("sprites/can.png");
    this.visibility = 255;

    World.add(world, this.body);
  }
  display()
  {
    
    var angle = this.body.angle;

    if(this.body.speed<5)
    {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("green");
      image(this.image,0, 0, this.width, this.height);
      pop();
     }
     
     else
     {
       World.remove(world,this.body);
       push();
       this.visiblity=this.visiblity - 10;
       tint(255,this.visiblity);
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();
     }
  }
};