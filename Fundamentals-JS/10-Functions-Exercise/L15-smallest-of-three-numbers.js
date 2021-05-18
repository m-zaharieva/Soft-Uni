function smallestNumber(numOne, numTwo, numThree) {
    if (numOne < numTwo && numOne < numThree) {
        console.log(numOne);
    } else if (numTwo < numThree) {
        console.log(numTwo);
    } else {
        console.log(numThree);
    }
}

smallestNumber(600, 342, 123);

