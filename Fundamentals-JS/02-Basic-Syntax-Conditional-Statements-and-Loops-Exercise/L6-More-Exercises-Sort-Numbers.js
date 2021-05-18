function sortNumbers (num1, num2, num3) {
    let bigNum = 0;
    let smallNum = 0; 
    let middleNum = 0;

    if (num1 >= num2 && num1 >= num3) {
        bigNum = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        bigNum = num2;
    } else if (num3 >= num1 && num3 >= num2) {
        bigNum = num3;
    }

    if (num1 <= num2 && num1 <= num3) {
        smallNum = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        smallNum = num2;
    } else if (num3 <=num1 && num3 <= num2) {
        smallNum = num3
    }

    if (num1 >= num2 && num1 <= num3 || num1 <= num2 && num1 >= num3) {
        middleNum = num1;
    } else if (num2 >= num1 && num2 <= num3 || num2 <= num1 && num2 >= num3) {
        middleNum = num2;
    } else if (num3 >= num1 && num3 <= num2 || num3 <= num1 && num1 >= num2) {
        middleNum = num3;
    }

    console.log(bigNum);
    console.log(middleNum);
    console.log(smallNum);
} 

sortNumbers(2,1,3);



// function sortNumbers(firstNumber, secondNumber, thirdNumber) {
//     // let firstNumber = input[0];
//     // let secondNumber = input[1];
//     // let thirdNumber = input[2];
    
//     if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
//         console.log(firstNumber);
//     } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
//         console.log(secondNumber);
//     } else if (thirdNumber >= secondNumber && thirdNumber >= firstNumber) {
//         console.log(thirdNumber);
//     }

//     if ((firstNumber >= secondNumber && firstNumber <= thirdNumber) || (firstNumber <= secondNumber && firstNumber >= thirdNumber)) {
//         console.log(firstNumber);
//     } else if ((secondNumber >= firstNumber && secondNumber <= thirdNumber) || (secondNumber <= firstNumber && secondNumber >= thirdNumber)) {
//         console.log(secondNumber);
//     } else if ((thirdNumber >= secondNumber && thirdNumber <= firstNumber) || (thirdNumber >= firstNumber && thirdNumber <= secondNumber)) {
//         console.log(thirdNumber);
//     }

//     if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
//         console.log(firstNumber);
//     } else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
//         console.log(secondNumber);
//     } else if (thirdNumber <= firstNumber && thirdNumber <= secondNumber) {
//         console.log(thirdNumber);
//     }

// }

// sortNumbers(2, 1, 3);


 