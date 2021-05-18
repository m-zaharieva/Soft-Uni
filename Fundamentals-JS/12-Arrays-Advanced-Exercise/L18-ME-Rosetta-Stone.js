function rosetteStone(myArray) {
    let lengthOfTemplate = Number(myArray.shift());

    let templateMatrix = [];
    fillEmptyArray(myArray, lengthOfTemplate, templateMatrix, 0);
    arrayToMatrix(templateMatrix);

    let encodedMessage = [];
    fillEmptyArray(myArray, myArray.length, encodedMessage, lengthOfTemplate);
    arrayToMatrix(encodedMessage);

    let decodedMessage = [];
    fillEmptyArray(myArray, myArray.length, decodedMessage, lengthOfTemplate);
    arrayToMatrix(decodedMessage);

    for (let row in encodedMessage) {
        for (let column in encodedMessage) {
            let encodedElement = encodedMessage[row][column];
            let decodingElement = templateMatrix[row % 2][column % 2];
            let decodedNumber = encodedElement + decodingElement; 
            decodedMessage[row][column] = decodedNumber;
        }
    }

    for (let row in decodedMessage) {
        for (let column in decodedMessage) {
            let element = decodedMessage[row][column];
            if (element % 27 === 0) {
                decodedMessage[row][column] = ' ';
            } else {
                element = element % 27; 
                decodedMessage[row][column] = String.fromCharCode(element + 64);
            }
        }
    }

    let result = [];
    for (let row = 0; row < decodedMessage.length; row++) {
        for (let column = 0; column < decodedMessage.length; column++) {
            result.push(decodedMessage[row][column]);
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
    [ '2',
  '31 32',
  '74 37',
  '19 0 23 25',
  '22 3 12 17',
  '5 9 23 11',
  '12 18 10 22' ]);


    // 65 - 90; 