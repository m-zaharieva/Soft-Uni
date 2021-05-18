function equalArr(firstArr, secondArr) {
    let indexOfDefer = 0;
    let areEqual = true;
    let sum = 0;
    for (let index = 0; index < firstArr.length; index++) {
        let firstArrEl = firstArr[index];
        let secondArrEl = secondArr[index];

        if (firstArrEl !== secondArrEl) {
            indexOfDefer = index;
            areEqual = false;
            break;
        }
    }
    
    if (areEqual) {
        for(let currentEl of firstArr) {
            sum += Number(currentEl);
        } 
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDefer} index`);
    }
}

equalArr(['10', '20', '30'], ['10', '20', '30']);