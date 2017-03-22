var x = 0;
var speed = 2;

function setup(){
   createCanvas(600,400); 
}

function draw(){
    
    //the background should change to pink when i click the screen.
    background(137, 102, 186);
    if(mouseIsPressed){
        background(198, 89, 189);
    }
    //makes outline thick and white
    stroke(255);
    strokeWeight(9);

    
    if(mouseX<150){
        fill(130, 39, 107);
    }
    else{
        noFill();
    }
     
    //circle
    rect(x,200,100,100);
    
//circle  should be moving because of this code
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
    
}