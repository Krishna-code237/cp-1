class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction' : 0.5,
            'density' : 1.2,
        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius = radius;
       

        World.add(World,this.body);
        }
        display(){
            ellipseMode(CENTER);

            fill("yellow");

            circle(this.body.position.x,this.body.position.y,this.radius);
        }
        };