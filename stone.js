class Stone{
    constructor(x, y, diameter) {
        var options = {
            IsStatic = false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.diameter);
        pop();
      }
}
function keyPressed() {

	if(keyCode===32) {
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		Launcher.attach(stones.body);

	}
}