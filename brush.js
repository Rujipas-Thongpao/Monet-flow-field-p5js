let size = 60;
let iter = 100;
let clickCount = 0;

function preload() {
    img = loadImage('assets/monet-square.jpg');
}
function setup() {
    createCanvas(1000, 1000);
    background(255);
    img.resize(600, 0);
    imageMode(CENTER);
}


function draw() {
    translate(width / 2, height / 2);
    if (size <= 2) return;

    let a = map(clickCount, 0, 8, 20, 100);
    for (let i = 0; i < iter; i++) {

        let ranX = random(img.width);
        let ranY = random(img.height);

        // check if in circle.

        let px = ranX - img.width / 2;
        let py = ranY - img.height / 2;

        if (Math.pow(Math.pow(px, 2) + Math.pow(py, 2), 1 / 2) < img.width / 2) {

            noStroke();
            let c = color(img.get(ranX, ranY));
            c.setAlpha(a);
            fill(c);
            rectMode(CENTER);

            // Create Rect
            push();
            angleMode(DEGREES);
            translate(px, py);
            rotate(random(360));
            rect(0, 0, size * random(.5, 2), size * random(.5, 2), 3);
            pop();
        }
    }
    size -= 2;
    iter += 50;
    clickCount += 1;

}

