let drawCircles = false;

let circle1 = new Circle("Circle 1", 100, 1, null, 270);
let circle2 = new Circle("Circle 2", 75, 5, circle1, 270)
let circle3 = new Circle("Circle 3", 50, 7, circle2, 270)
let circle4 = new Circle("Circle 4", 25, 10, circle3, 270)
const circleManager = new CircleManager([circle1, circle2, circle3, circle4])

const lineDraw = new LineDraw();
const circleDisplay = new CircleDisplay(circleManager.circles);

function setup() {
    createCanvas(1100, 800);

    circleDisplay.setup();
    circleDisplay.update(circleManager.circles);
}

function draw() {
    background(0);
    circleManager.update();
    if (drawCircles) circleManager.drawCircles();
    circleManager.drawLines();

    lineDraw.update(circleManager.circles[circleManager.circles.length - 1])
    lineDraw.drawLine(circleManager.circles[circleManager.circles.length - 1])

    circleDisplay.render(circleManager.circles);
}