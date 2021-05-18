function sumDigits(num) {
    let numToString = '' + num;
    let arr = numToString.split('');
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        let currentNum = Number(arr[i]);
        sum += currentNum;
    }

    console.log(sum);
}

sumDigits(543);