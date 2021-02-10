class Launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB=pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
     fly(){
         this.launch.bodyA=null;
     }
    
    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
       
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
}
attach(body){
    this.launch.bodyA=body
} 
}