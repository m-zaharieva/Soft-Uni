function sumOfNumbers (arg) {
    let number = "" + arg;
    let result = 0; 
    for (let i = 0; i < number.length; i++) {
        let characters = Number(number[i]);
        result += characters;  
    }
    console.log(`The sum of the digits is:${result}`)
}

sumOfNumbers("1234");