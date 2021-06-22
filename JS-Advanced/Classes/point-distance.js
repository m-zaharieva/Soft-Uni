class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(pointOneObj, pointTwoObj) {
        let xDistance = Math.abs(pointOneObj.x - pointTwoObj.x);
        let yDistance = Math.abs(pointOneObj.y - pointTwoObj.y);
        let twoPointsDistance = Math.sqrt((xDistance ** 2) + (yDistance ** 2));
        return twoPointsDistance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));