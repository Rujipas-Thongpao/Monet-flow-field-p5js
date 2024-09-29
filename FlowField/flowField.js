let _width
let _height
let scale = 10;
let maps = [];
let z = 0;
let mover;
let flowstrength = 100;

let moverAmount = 1000;
let movers = []
function setup() {
    createCanvas(800, 800);
    _width = width / scale;
    _height = height / scale;
    for (let i = 0; i < _width; i++) {
        let mm = []
        for (let j = 0; j < _height; j++) {
            let n = noise(i / _width, j / _height);
            let a = map(n, 0, 1, 0, 360);
            let dir = createVector(cos(a), sin(a));
            mm.push(dir);
        }
        maps.push(mm);
    }
    for (let i = 0; i < moverAmount; i++) {
        movers.push(new Mover(random(0, _width * scale), random(0, _height * scale), 2));
    }
}


function draw() {
    angleMode(DEGREES)
    for (let i = 0; i < _width; i++) {
        for (let j = 0; j < _height; j++) {
            let n = noise(i / _width, j / _height, z);
            // if (n > .8) {
            //     console.log(n);
            // }
            let a = map(n, 0, 1, 0, 360);
            push();
            translate(i * scale, j * scale);
            let dir = createVector(cos(a), sin(a));
            maps[i][j] = dir;
            fill(n * 255);
            // noStroke();
            // rect(0, 0, scale, scale);
            // line(0, 0, dir.x * 3, dir.y * 3);
            // ellipse(0, 0, 2);
            pop();
        }
    }

    movers.forEach(mover => {
        if (mover.position.x < 0 || mover.position.y < 0 || mover.position.x >= _width * scale || mover.position.y >= _height * scale) {
            mover.position = createVector(random(0, _width * scale), random(0, _height * scale));
            mover.velocity = createVector(0, 0);
        }
        mover.GetFlow(maps)
        mover.move()
        mover.show()
    });
}




