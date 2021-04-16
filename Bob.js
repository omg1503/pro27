class Bob{
    constructor(x,y){
       var options = {
            restitution:1,
            friction:0,
            density:5.1,
            isStatic:false
        }
        
        
        this.body = Bodies.circle(x, y, 25, options);
      
      World.add(world, this.body);
    }

    display(){
    
     push();
     ellipseMode(RADIUS);
     strokeWeight(4);
      stroke("black");
      fill("pink");
      ellipse(this.body.position.x, this.body.position.y, 25,25);
      pop();
    }
}