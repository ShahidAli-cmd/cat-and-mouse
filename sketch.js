
function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
     
   

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }
  //For moving and changing animation write code here
  if(cat.x - Mouse.x < (cat.width - mouse.width)/2){


}
}