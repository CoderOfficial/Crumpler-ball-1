class Bin{
  constructor(x,y,w,h){
      let options = {
          restitution:0,
          isStatic:true
      };
      this.body = Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
      this.height = h;
      this.width = w;
  }
  display(){
      let pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("blue");
      rect(0,0,this.width,this.height);
      pop();
  }
}