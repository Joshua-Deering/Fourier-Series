class LineDraw {
    
    constructor() {
        this.lineArray = [];
    }
    
    update(endCircle) {
        this.lineArray.push([endCircle.endX, endCircle.endY])
        if(this.lineArray.length >= 1000) {
            this.lineArray.shift()
        }
    }
    
    drawLine() {
        noFill();
        stroke(0,255,255);
        beginShape();
        
        for(let i = 0; i < this.lineArray.length; i++) {
            curveVertex(this.lineArray[i][0], this.lineArray[i][1])
        }
        endShape();
    }
    
}