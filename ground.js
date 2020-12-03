class Ground{

    constructor(x,y,width,height){

        var ground_options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

     }
     
    display(){

        var a = this.body.position;

        rectMode(CENTER);
        rect(a.x,a.y,this.width,this.height);

    }
}