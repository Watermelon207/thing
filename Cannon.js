class Cannon{
    constructor(x, y, width, height,angle) {
        var options = {
          isStatic: true
        };
        this.image = loadImage("assets/CANON.png");
        this.width = width;
        this.height = height;
        this.angle=angle;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

display() {
  if(keyIsDown(LEFT_ARROW)&& this.angle>-1.454545)
  {
    this.angle=this.angle-0.02;
  }
  if(keyIsDown(RIGHT_ARROW)&& this.angle<0.35)
  {
    this.angle=this.angle+0.02;
  }
  console.log(this.angle);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image, 0, 10, this.width, this.height);
    pop();
  }


}