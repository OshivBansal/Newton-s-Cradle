class Rope{
  constructor(body1,body2,offsetX,offsetY,){
      this.offsetX=offset.X
      this.offsetY=offset.Y
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,Y:this.offsetY}
}
this.rope=Constraint.create(options)
World.add(world,this.rope)
}
display(){
    var posA=this.rope.bodyA.position
    var posB=this.rope.bodyB.position
    strokeWeight(2)
    var anchor1X=pointA.x
    var anchor1Y=pointA.y

    var anchor2X=pointB.x+this.offsetX
    var anchor2Y=pointA.y+this.offsetY
   line(anchor1X,anchor1Y,anchor2X,anchor2Y)
}
}