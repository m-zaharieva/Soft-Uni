function rosetteStone(myArray) {
    let lengthOfTemplate = Number(myArray.shift());

    let templateMatrix = [];
    fillEmptyArray(myArray, lengthOfTemplate, templateMatrix, 0);
    arrayToMatrix(templateMatrix);

    let encodedMessage = [];
    fillEmptyArray(myArray, myArray.length, encodedMessage, lengthOfTemplate);
    arrayToMatrix(encodedMessage);

    for (let row in encodedMessage) {
        for (let column in encodedMessage) {
            let encodedElement = encodedMessage[row][column];
            let decodingElement = templateMatrix[row % templateMatrix.length][column % templateMatrix[0].length];
            let decodedNumber = encodedElement + decodingElement; 
            encodedMessage[row][column] = decodedNumber;
        }
    }

    for (let row in encodedMessage) {
        for (let column in encodedMessage) {
            let element = encodedMessage[row][column];
            if (element % 27 === 0) {
                encodedMessage[row][column] = ' ';
            } else {
                element = element % 27; 
                encodedMessage[row][column] = String.fromCharCode(element + 64);
            }
        }
    }

    let result = [];
    for (let row = 0; row < encodedMessage.length; row++) {
        for (let column = 0; column < encodedMessage.length; column++) {
            result.push(encodedMessage[row][column]);
        }
    }

    console.log(result.join(''));

    function fillEmptyArray(array, numberOfRows, newArray, start) {
        for (let i = start; i < numberOfRows; i++) {
            let elemet = array[i];
            newArray.push(elemet);
        }
    }

    function arrayToMatrix(newArray) {
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = newArray[i].split(' ').map(Number);
        }
    }
}

rosetteStone(
    [ '1',
    '4 6 5',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);


    // 65 - 90; 