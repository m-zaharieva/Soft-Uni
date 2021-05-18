function sorting(input) {
    let copyOfArray = input.slice();
    copyOfArray.sort((a, b) => a - b);
    let length = copyOfArray.length - 1;
    let finalArray = [];

    for (let i = 0; i <= length; i+=2) {
        let biggest = copyOfArray.pop();
        let smallest = copyOfArray.shift();
        finalArray.push(biggest, smallest);
    }

    console.log(finalArray.join(' '));
 
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


// Write a function that sorts an array of numbers so that the first element is the biggest one,
// the second is the smallest one, the third is the second biggest one,
// the fourth is the second smallest one and so on. 
// Print the elements on one row, separated by single space.