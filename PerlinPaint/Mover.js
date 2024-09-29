class Mover {
    constructor() {
        this.position = createVector(0, 0);
        this.size = 50;
        this.velocity = createVector(0, 0);
        this.speed = 5;
        this.color;
    }

    GetFlow(maps) {
        let mx = floor(this.position.x / scale);
        let my = floor(this.position.y / scale);
        if (mx < 0 || mx >= _width || my < 0 || my >= _height) return;
        this.dir = maps[floor(this.position.x / scale)][floor(this.position.y / scale)];
    }

    move() {
        this.velocity.add(this.dir.mult(flowstrength))
        this.velocity.normalize();
        this.position.add(this.velocity.mult(this.speed));
    }

    show() {
        push();
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size)
        pop();
    }


}