function maxNumber(array) {
    let index = 1;
    let maxNumber = Number(array[0]);
 
    while (array[index] !== "Stop") {
        if (maxNumber > Number(array[index])) {
            index++
        } else {
            maxNumber = Number(array[index]);
            index++;
        }
    }
    console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"]); 
