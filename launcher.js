
function keyPressed() {

	if(keyCode===32) {
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		launcher.attach(stones.body);

	}
}

// class Launcher{
//     constructor(bodyA, pointB){
//         var options = {
//             bodyA: bodyA,
//             pointB: pointB,
//             stiffness: 0.04,
//             length: 10
//         }
//         this.pointA = pointA
      
//         World.add(world, this.pointA);
//     }

//     fly(){
//         this.bodyA = null;
//     }

//     display(){
//         if(this.pointA.bodyA){
            
//             var pointA = this.bodyA.position;
//             var pointB = this.bodyB.position;
//             push();
        
//             if(pointA.x < 220){
//             line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
//             line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
    
//             }
//             else{
//             // strokeWeight(4)    
//             line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
//             line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);  
//             }
//             pop();
//         }
//     }
    
// }