class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction' : 1,
            'density' : 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(World,this.body);
        }
        display(){
            rectMode(CENTER);

            fill(225);

            rect(this.body.postion.x,this.body.postion.y,this.width,this.height);
        }
        };