function solve(array) {
    let biggerNum = Number.MIN_SAFE_INTEGER;

    let filtered = array.filter(el => {
        if (el >= biggerNum) {
            biggerNum = el;
            return el;
        }
    });
console.log(filtered);
return filtered;
}

solve([1, 2, 2, 6, 3, 6, 3, 4]);