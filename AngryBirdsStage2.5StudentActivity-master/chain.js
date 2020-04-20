class chain{
constructor(bodyA,bodyB){
    var options={
        bodyA: bird.body,
        bodyB: log6.body,
        stiffness: 0.04,
        lenght : 10
    }
    this.chain= Constraint.create(options);
    World.add(world,chain);
}
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.Y) ;
}
}