let _width
let _height
let scale = 10;
let maps = [];
let flowstrength = 1;

let movers = []

let img;
let radius = 300;

function preload() {
    img = loadImage("./assets/monet-square.jpg")

}

function displayImg() {
    push();
    imageMode(CENTER)
    translate(width / 2, height / 2);
    image(img, 0, 0, width, height)
    pop();
}

function displayNoise(i, j, n, a) {
    push();
    noStroke();
    fill(n * 255);
    rect(i * scale, j * scale, scale, scale);
    push();
    stroke(0);
    translate(i * scale, j * scale);
    line(0, 0, cos(a) * 10, sin(a) * 10);
    ellipse(0, 0, 4);
    pop();
}
function setup() {
    createCanvas(800, 800);
    _width = width / scale;
    _height = height / scale;
    angleMode(DEGREES);
    img.resize(width, height);
    // displayImg();

    for (let i = 0; i < _width; i++) {
        let mm = []
        for (let j = 0; j < _height; j++) {
            let n = noise(i / _width * 2, j / _height * 2);
            let a = map(n, 0, 1, 0, 360);
            let dir = createVector(cos(a), sin(a));
            mm.push(dir);
            // displayNoise(i, j, n, a);
        }
        maps.push(mm);
    }


    let ma = 100;
    for (let i = 0; i < ma; i++) {
        movers.push(new Mover());
    }
    let iter = 30;
    let s = 30;
    let moveLength = 10;

    for (let j = 0; j < iter; j++) {
        for (let i = 0; i < ma; i++) {
            let position = RandomPostionInCircle();
            let mover = movers[i];
            mover.position = position;
            mover.size = s;
            mover.color = img.get(position.x, position.y);

            for (let k = 0; k < moveLength; k++) {
                let center = createVector(width / 2, height / 2);
                if (p5.Vector.dist(position, center) >= radius) break;

                mover.GetFlow(maps);
                mover.move();
                mover.show();
            }
        }
        s /= 1.06;
        moveLength /= 1.08;
    }

}


function RandomPostionInCircle() {
    while (true) {
        let randomPostion = createVector(random(width), random(height));
        let center = createVector(width / 2, height / 2);
        if (p5.Vector.dist(randomPostion, center) <= radius) return randomPostion;

    }
}



