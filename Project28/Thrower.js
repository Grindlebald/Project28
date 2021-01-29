class Thrower{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.sling1 = loadImage("lol/boy.png");

        this.sling3 = loadImage('lol/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,240,200,200);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y );

            }
            else{
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
           
            
            pop();
        }
    }
    
}