class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }

        this.x = x
        this.y = y
        this.r = r 
        this.body = Bodies.circle(this.x,this.y,this.r,options)

        this.image = loadImage("images/stone.png")

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        translate (pos.x,pos.y)
        ellipseMode(RADIUS)
        imageMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2)
        // ellipse(this.image,
        //     0,0,this.radius,this.radius)
        pop();
    }
}