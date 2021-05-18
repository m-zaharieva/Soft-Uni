function condencedArrays(numbers) {
    

    while (numbers.length > 1) {
        let condenced = [];
        for(let index = 0; index < numbers.length-1; index++) {
            let firstNum = numbers[index];
            let secondNum = numbers[index+1];
            condenced.push(firstNum + secondNum);
        }

        numbers = condenced;
    }

    console.log(numbers[0]);

}

condencedArrays([2, 10, 3]);