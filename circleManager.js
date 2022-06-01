class CircleManager {
    
    constructor(circles /* [Array] Circles */) {
        this.circles = circles;
    }
    
    update() {
        for(var i = 0; i < this.circles.length; i++) {
            this.circles[i].update();
        }
    }
    
    drawCircles() {
        for(var i = 0; i < this.circles.length; i++) {
            this.circles[i].drawCircle();
        }
    }
    
    drawLines() {
        for(var i = 0; i < this.circles.length; i++) {
            this.circles[i].drawLine();
        }
    }
    
}