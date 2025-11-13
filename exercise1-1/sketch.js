let cat;
let catBigX = 512;
let catBigY = 410;

function preload(){
    cat = loadImage("assets/pallas_cat.jpg");
}

function setup() {
    createCanvas(510, 410);
    imageMode(CENTER);
}

function draw() {
    image(cat, width /2 , height/2, catBigX, catBigY);
    

    if (catBigX < 800 && catBigY < 650) {
        catBigX++;
        catBigY++;
    }
}