class CannonBall {
    constructor(x, y) {
      var options = {
       //add resistution 
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0

      };
  //add circle to the
   this.r=20
  this.body=Bodies.circle(x,y,this.r,options)
  //loadImage
  this.image=loadImage("assets/cannonball.png")
      World.add(world, this.body);
    }
  
    //add shoot function
    shoot()
    {
        
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
  
    display() {
    
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  //call the image function
        image(this.image, 0,0,this.r,this.r);
      pop();
  
      }
    }