function smallestNumbers(myArray) {
    
    myArray.sort((a,b) => a - b);

    let SmallestTwoNumbers = myArray.slice(0, 2);
    console.log(SmallestTwoNumbers.join(' '));
}

smallestNumbers([30, 15, 50, 5]);