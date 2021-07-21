class Paper{
    constructor(x,y,r){
        let options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        };
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
        this.radius = r;
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(150,0,150);
        circle(0,0,this.radius);
        pop();
    }
}