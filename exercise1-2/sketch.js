let sky;
let plane;
let plane1x = 0
let plane2x = 0

function preload(){
    sky = loadImage("assets/blue-sky.jpg");
    plane = loadImage("assets/plane.png");
}

function setup(){
    createCanvas(sky.width, sky.height);
    imageMode(CENTER);
    
}

function draw(){
    image(sky, width/2, height/2);
    image(plane, plane1x, 200);
    image(plane, plane2x, 500, 260, 200)
    plane1x = plane1x + 5
    plane2x = plane2x + 6

    

    if (plane1x > 1000){
        plane1x = 0;
    } else if (plane2x > 950){
        plane2x = 0;
    }
    
}
