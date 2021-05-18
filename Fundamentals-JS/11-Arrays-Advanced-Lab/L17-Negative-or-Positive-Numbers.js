// first version
function negativeOrPositiveNum(myArray) {
    let newArray = [];

    for (let element of myArray) {
        if (element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }
   
    for (let element of newArray) {
        console.log(element);
    }
}

negativeOrPositiveNum([7, -2, 8, 9]);

