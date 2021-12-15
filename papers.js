class papers{

constructor(x,y,width,height){
    var config = {
    isStatic:false,
    restituction:0.3,
    friction:0,
    desity:1,2
    }
    
    
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,width,height,config);

Wolrd.add(world,this.body);

this.image = loadImage("paper.png");
}

display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}


}