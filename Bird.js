class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smoke = loadImage("sprites/smoke.png");
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [] 

  }

  display() {
    super.display();
    if(this.body.velocity.x >10 && this.body.position.x >200){
    var pos = [this.body.position.x,this.body.position.y]
    this.trajectory.push(pos)
    }
    for (var index = 0; index < this.trajectory.length; index++) {
    image(this.smoke,this.trajectory[index][0],this.trajectory[index][1]);
      
    }
  }
}
