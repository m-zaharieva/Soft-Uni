function magicSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let pairs = [];
            let numOne = arr[i];
            let numTwo = arr[j];
            let sum = numOne + numTwo;
            if (sum === n) {
                pairs.push(numOne, numTwo);
            } else {
                continue;
            }

            console.log(pairs.join(' '));
            
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);