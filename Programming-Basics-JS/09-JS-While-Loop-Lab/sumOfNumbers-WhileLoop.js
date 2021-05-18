function sumOfNumbers(input) {

    let target = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1; 
    while (sumOfNumbers < target) {
        sumOfNumbers += Number(input[index]);
        index++;
    }
    console.log(sumOfNumbers);
}

sumOfNumbers(["20", "1", "2", "3", "4", "5", "6"]);