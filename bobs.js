class Bobs{
    constructor(x,y,r){

    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2   
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r/2,options)
    World.add(world,this.body)
 }
 display(){
     var bobspos=this.body.position
     push();
     strokeWeight(2);
     fill(255,0,255)
     ellipseMode(RADIUS)
     ellipse(bobspos.x,bobspos.y,this.r,this.r)
     pop();
 }
}   