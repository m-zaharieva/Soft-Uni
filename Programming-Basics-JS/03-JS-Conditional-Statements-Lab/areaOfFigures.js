function areaOfFigures (figureType, mesure1, mesure2) {
    let type = figureType;

    if (type === "square") {
        let squareSide = Number(mesure1);
        let squareArea = squareSide * squareSide;
        
        console.log(squareArea.toFixed(3));

    } else if (type === "rectangle") {
        let recSideA = Number(mesure1);
        let recSideB = Number(mesure2);
        let recArea = recSideA * recSideB;

        console.log(recArea.toFixed(3));

    } else if (type === "circle") {
        let circleRadius = Number(mesure1);
        let circleArea = Math.PI * circleRadius * circleRadius;

        console.log(circleArea.toFixed(3));

    } else {
        let triangleSide = Number(mesure1);
        let triangleHeight = Number(mesure2);
        let triangleArea = triangleSide * triangleHeight / 2;

        console.log(triangleArea.toFixed(3));
    }
};

areaOfFigures("square", "5");
