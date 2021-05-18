function airPollution(map, forces) {
    let matrixMap = [];
    let matrixForces = [];

    arrayOfStringsToMatrix(map, matrixMap);
    arrayOfStringsToMatrix(forces, matrixForces);

    for (let i = 0; i < matrixMap.length; i++) {
        matrixMap[i] = matrixMap[i].map(Number);
    }

    for (let i = 0; i < matrixForces.length; i++) {
        let force = matrixForces[i][0];

        switch (force) {
            case 'breeze':
                let row = Number(matrixForces[i][1]);
                for (let i = 0; i < matrixMap[row].length; i++) {
                    matrixMap[row][i] -= 15;
                }


                for (let i = 0; i < matrixMap[row].length; i++) {
                    let element = matrixMap[row][i];
                    if (element < 0) {
                        matrixMap[row][i] = 0;
                    }
                }
                break;
            case 'gale':
                let column = Number(matrixForces[i][1]);
                for (let i = 0; i < matrixMap.length; i++) {
                    matrixMap[i][column] -= 20;
                }

                for (let i = 0; i < matrixMap.length; i++) {
                    let element = matrixMap[i][column];
                    if (element < 0) {
                        matrixMap[i][column] = 0;
                    }
                }
                break;
            case 'smog':
                let value = Number(matrixForces[i][1]);
                for (let i = 0; i < matrixMap.length; i++) {
                    for (let j = 0; j < matrixMap.length; j++) {
                        matrixMap[i][j] += value;
                    }
                }
                break;
        }
    }

    let polltedAreas = [];
    for (let i = 0; i < matrixMap.length; i++) {
        for (let j = 0; j < matrixMap.length; j++) {
            if (matrixMap[i][j] >= 50) {
                polltedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (polltedAreas.length === 0) {
        console.log('No polluted areas');
    } else {
        let result = polltedAreas.join(', ');
        console.log(`Polluted areas: ${result}`);
    }


    function arrayOfStringsToMatrix(array, newArray) {
        for (let i = 0; i < array.length; i++) {
            newArray[i] = array[i].split(' ');
        }
    }
}

airPollution(
    ["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
  ["breeze 1", "gale 2", "smog 35"]
)

// • "breeze {index}" – index is the row where all column’s value drops by 15 PM
// • "gale {index}" – index is the column in all rows where value drops by 20 PM
// • "smog {value}" – all blocks in the map increase equally by the given value’s PM