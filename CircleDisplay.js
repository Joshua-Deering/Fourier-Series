class CircleDisplay {

    constructor(circlesArray) {
        this.circlesArray = circlesArray;
        this.circleContainer;
        this.circleDivArray = [];

        this.xspacing = 8; // Distance between each horizontal location
        this.w; // Width of entire wave
        this.dx; // Value for incrementing x
        this.yvalues; // Using an array to store height values for the wave
    }

    setup() { //create and style the container
        this.circleContainer = createDiv("");
        this.circleContainer.position(10, 10)
        this.circleContainer.style('display', "flex");
        this.circleContainer.style('align-items', "center");
        this.circleContainer.style('justify-content', "center");
        this.circleContainer.style('flex-direction', "column");
        this.circleContainer.style('position', "absolute");
        this.circleContainer.style('min-width', "100px");
        this.circleContainer.style('min-height', "50px");
        this.circleContainer.style('background-color', "darkgray");
        this.circleContainer.style('border-radius', "10px");

        this.w = width + 16;
        this.yvalues = new Array(floor(this.w / this.xspacing));
    }

    update(circles) {
        this.circlesArray = circles;

        if (this.circleDivArray[1]) {
            for (let i = 0; i < this.circlesArray.length; i++) {
                this.circleDivArray[i].remove();
            }
        }

        for (let i = 0; i < this.circlesArray.length; i++) {
            this.circleDivArray[i] = [createDiv(this.circlesArray[i].name)]; //create div for this circle
            this.circleContainer.child(this.circleDivArray[i][0]); //add this circle as a child to the container

            let circ = this.circleDivArray[i][0];
            this.circleDivArray[i][1] = createDiv(""); // shows how the circle actually looks
            this.circleDivArray[i][2] = createDiv(""); //makes the white outline on the circle display

            //div styling
            circ.style("min-width", "95px")
            circ.style("min-height", "50px")
            circ.style('background-color', "gray");
            circ.style("border-radius", "10px")
            circ.style("margin", "2.5px 2.5px")
            circ.style("display", "flex")
            circ.style("align-items", "center")
            circ.style("justify-content", "center")
            circ.style("flex-direction", "column")
            circ.style("font-size", "20px")
            circ.style("font-weight", "bold")

            //child divs
            this.circleDivArray[i][1].style("border-radius", "50%");
            this.circleDivArray[i][1].style("background-color", "white");
            this.circleDivArray[i][1].style("width", this.circlesArray[i].radius + "px");
            this.circleDivArray[i][1].style("height", this.circlesArray[i].radius + "px");
            this.circleDivArray[i][1].style("display", "flex")
            this.circleDivArray[i][1].style("align-items", "center")
            this.circleDivArray[i][1].style("justify-content", "center")
            circ.child(this.circleDivArray[i][1])

            this.circleDivArray[i][2].style("border-radius", "50%");
            this.circleDivArray[i][2].style("background-color", "black");
            this.circleDivArray[i][2].style("width", this.circlesArray[i].radius - 4 + "px");
            this.circleDivArray[i][2].style("height", this.circlesArray[i].radius - 4 + "px");
            this.circleDivArray[i][1].child(this.circleDivArray[i][2])
        }
    }

    render() {

        for (let i = 0; i < this.circlesArray.length; i++) {
            let theta = 0.0; // Start angle at 0
            let amplitude = this.circlesArray[i].radius / 10; // Height of wave
            let period = this.circlesArray[i].rotationSpeed * 250; // How many pixels before the wave repeats
            let dx = (TWO_PI / period) * this.xspacing;

            theta += 0.02;

            // For every x value, calculate a y value with sine function
            let x = theta;
            for (let i = 0; i < this.yvalues.length; i++) {
                this.yvalues[i] = sin(x) * amplitude;
                x += dx;
            }

            stroke(255);
            let yes = beginShape();

            for (let x = 0; x < this.yvalues.length; x++) {
                curveVertex((x * this.xspacing / 10) * 3 + width - 300, height - 100 + (this.yvalues[x]) * 3)
            }
            endShape();


        }

    }

}