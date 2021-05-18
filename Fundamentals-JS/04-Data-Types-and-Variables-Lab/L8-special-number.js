function specialNum(arg) {
    for (let num = 1; num <= arg; num++) {
        let sum = 0;
        let tempNum = num;
        let lastDig = tempNum % 10;  
        while (tempNum != 0) {
            sum += lastDig;
            tempNum = Number(parseInt(tempNum / 10));
            lastDig = tempNum % 10;
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }
}

specialNum(15);