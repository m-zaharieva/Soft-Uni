function amazingNumber (num) {
    let numToString = num.toString();
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    let result = sum.toString().includes('9');

    if (result) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}

amazingNumber(1233);