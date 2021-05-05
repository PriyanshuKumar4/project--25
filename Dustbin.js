
 {
    constructor(x,y) 
{

    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinHeight=213;
    this.wallThickness=20;

       this.image=loadImage("dustbingreen.png")
       this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true}),
       this.leftWallBody=Bodies.rectangle(this.x-dustbinWidth/2,this.y-dustbinHeight/2);




      }
     
    
    display();
     {

      rectMode(CENTER);

      fill(255);

      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  }