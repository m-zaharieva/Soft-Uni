function area(arg) {
    if (typeof arg === 'number') {
        let circleArea = Math.PI * arg**2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}

area('name');