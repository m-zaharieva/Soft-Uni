function solve(array) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let filteredArray = array.reduce((ac, el) => {
        if (el >= maxNum) {
            ac.push(el);
            maxNum = el;
        }
        return ac;
    }, []);


    return filteredArray;
}

solve([1, 2, 2, 6, 3, 6, 3, 4]);