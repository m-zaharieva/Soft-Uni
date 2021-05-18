function triangleArea(sideA, sideB, sideC) {
    let semiPerimeter = (sideA + sideB + sideC) / 2; 
    let result = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log(result);
}

triangleArea(2, 3.5, 4);