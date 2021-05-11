class Paper{
    constructor(x,y,width,height){
        var options={
            
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height = height;
        this.image= loadImage("paper.png");
        World.add(world, this.body);

    }
    display(){
        var pen = this.body.position;

        image(this.image,pen.x,pen.y,this.width,this.height)
        circle(pen.x,pen.y,35);
       
    }
}