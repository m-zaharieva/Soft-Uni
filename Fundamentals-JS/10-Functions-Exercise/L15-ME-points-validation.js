function pointsValidation(arrayOfPoints) {
    let x1 = arrayOfPoints[0]; // 3  // 2
    let y1 = arrayOfPoints[1]; // 0  // 1
    let x2 = arrayOfPoints[2]; // 0  // 1
    let y2 = arrayOfPoints[3]; // 4  // 1
    let cx = 0;
    let cy = 0;
   
    distanceBetweenPoints(x1, y1, cx, cy);
    distanceBetweenPoints(x2, y2, cx, cy);
    distanceBetweenPoints(x1, y1, x2, y2);
    
    
    
    function distanceBetweenPoints(a, b, c, d) {
        let sideA = Math.abs(a - c);
        let sideB = Math.abs(b - d);
        let sideC = Math.sqrt(sideA*sideA + sideB*sideB);

        if (sideC % 1 !== 0) {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`);
        } else if (sideC % 1 === 0) {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`);
        }
    }

}

//pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);