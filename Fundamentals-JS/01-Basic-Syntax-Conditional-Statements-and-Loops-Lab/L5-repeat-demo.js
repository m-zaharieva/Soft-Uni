//Divisible By 3
function divisibleByThree() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
 }

divisibleByThree();


//Sum of Odd Numbers
// function solve(num) {
//     let sum = 0;
//     let oddNumber = 1;
//     for (let i = 1; i <=num; i++) {
//         console.log(oddNumber);
//         sum += oddNumber
//         oddNumber += 2;
//     }

//     console.log(`Sum: ${sum}`);
// }

// solve(5); 