class Mover {
    constructor(_px, _py, _v) {
        this.position = createVector(_px, _py);
        this.size = 10;
        this.velocity = createVector(0, 0);
        this.speed = _v;
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
        fill(color(187, 233, 255, 30));
        ellipse(this.position.x, this.position.y, this.size)
        pop();
    }


}