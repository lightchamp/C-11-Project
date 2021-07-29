var jaxon, jaxonrun, ground, groundimg
var invisible, invi1

function preload(){

    //pre-load images
    jaxonrun = loadAnimation("Runner-1.png", "Runner-2.png")
    groundimg = loadImage("path.png")
  
  }



function setup(){

    createCanvas(400,400);
    
    //create sprites here
    ground = createSprite(200,200)
    ground.addImage("path", groundimg)
    ground.velocityY=8

    jaxon = createSprite(200,170,20,50)
    jaxon.scale=0.05
    jaxon.addAnimation("running", jaxonrun);

    invisible = createSprite(-10,0,100,800)
    invi1 = createSprite(410,0,100,800)
    invisible.visible=false
    invi1.visible=false

}

function draw() {

    background(0);

    //moving the sprite acoording to the mouse
    jaxon.x = mouseX
  
    //colliing the sprite with invisible boundaries
    jaxon.collide(invisible)
    jaxon.collide(invi1)

    //making an infinite path
    if(ground.y > 400 ){
    ground.y = height/2;
  
    }

    drawSprites()

}
