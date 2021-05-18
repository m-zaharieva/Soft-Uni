function searchForANumber(sequanceOfNumbers, manipulations) {

    let elementsToTake = manipulations[0];
    let deleteElements = manipulations[1];
    let searchedElement = manipulations[2];

    let newArray = sequanceOfNumbers.slice(0, elementsToTake);
    newArray.splice(0, deleteElements);

    let count = 0; 
    while (newArray.length > -1) {
        let isPresent = newArray.includes(searchedElement);
        if (isPresent) {
            let index = newArray.indexOf(searchedElement);
            count++;
            newArray.splice(index, 1);
        } else {
            break;
        }
    }

    console.log(`Number ${searchedElement} occurs ${count} times.`);

}

searchForANumber(
    [5, 2, 3, 4, 1, 3, 3, 7, 6, 9, 3, 5, 7, 4, 3, 9],
    [10, 2, 3]
    );

//First number represents the number of elements you have to
//take from the first array (starting from the first one).

// Second number represents the number of elements you have to
//delete from the numbers you took (starting from the first one). 

// Third number is the number we search in our collection after the manipulations. 