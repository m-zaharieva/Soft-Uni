function subSum(array, startIndex, endIndex) {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }
    if (Array.isArray(array) === false) {
        return NaN; 
    }

    let sum = array.slice(startIndex, endIndex + 1).reduce((acc, x) => acc + Number(x), 0);
    return sum;
}

module.exports = subSum;