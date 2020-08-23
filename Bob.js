class Bob{
    constructor(x,y,width,height){
        var options = {
            'density':0.5,
            'restitution':0.8,
            'isStatic':false
    }
    
    
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width =20;
    this.height = 20;
    this.image = loadImage("sprites/bob1.png")
    World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
       imageMode(CENTER);
       image(this.image,0,0,20,20)
        pop();
    }
}