let cols;
let rows;
let scale = 10;
let img;
let z;


function preload() {
    img = loadImage('assets/monet-square.jpg');
}
function setup() {
    createCanvas(850, 850);
    img.resize(800, 0);
    image(img);
    cols = img.width / scale;
    rows = img.height / scale;
    rectMode(CENTER);
    z = 0;
}
function draw() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            // circle.
            let cx = img.width / 2;
            let cy = img.height / 2;

            let px = i * scale;
            let py = j * scale;

            if (Math.pow(Math.pow(cx - px, 2) + Math.pow(cy - py, 2), 1 / 2) < 400) {
                let n = noise(0.01 * i + z, 0.01 * j + z)
                let nn = map(n, 0, 1, 0.6, 1.5);
                let c = img.get(i * scale, j * scale);
                fill(c);
                noStroke();
                let size = scale;
                size = map(brightness(c), 0, 100, scale * 2, 6);
                rect((i + n * 3) * scale, (j + n * 3) * scale, size * nn, size * nn, n * 6);
            }
        }
    }
    z += 0.004;
}
