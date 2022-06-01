class Circle {

    constructor(name, radius, rotationSpeed, parent, angle) {
        this.name = name;
        this.radius = radius;
        this.rotationSpeed = rotationSpeed;
        this.parent = parent;
        this.angle = angle;

        if (this.parent === null) {
            this.x = 600;
            this.y = 400;
        } else {
            this.x = this.parent.endX;
            this.y = this.parent.endY;
        }

        let lineEndCoords = this.getEndCoords()
        this.endX = lineEndCoords.x;
        this.endY = lineEndCoords.y;
    }

    update() {
        this.angle += this.rotationSpeed;
        if (this.angle >= 360) this.angle -= 360;

        if (this.parent !== null) {
            this.x = this.parent.endX;
            this.y = this.parent.endY;
        }
        let lineEndCoords = this.getEndCoords()
        this.endX = lineEndCoords.x;
        this.endY = lineEndCoords.y;
    }

    drawLine() {
        let lineEndCoords = this.getEndCoords()

        stroke(255);
        line(this.x, this.y, lineEndCoords.x, lineEndCoords.y)
    }

    drawCircle() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.radius);
    }


    getEndCoords() {
        let angleInRadians = this.angle * (Math.PI / 180);

        var x2 = this.x + (this.radius / 2) * Math.cos(angleInRadians),
            y2 = this.y + (this.radius / 2) * Math.sin(angleInRadians);

        return ({ x: x2, y: y2 })
    }

}