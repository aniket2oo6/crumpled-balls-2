class Paper{

    constructor(x,y,radius){

        var paper_options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,radius,paper_options);
        this.radius = radius;
        World.add(world,this.body);

    }

    display(){

        var a = this.body.position;

        ellipseMode(CENTER);
        ellipse(a.x,a.y,this.radius);

    }
}