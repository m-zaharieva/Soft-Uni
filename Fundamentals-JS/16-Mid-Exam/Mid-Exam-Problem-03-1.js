function angryTom(itemsArray, indexOfEntryPoint, priceRange) {
    let leftSum = 0; 
    let rightSum = 0; 

    if (priceRange === 'cheap') {
        let entryPointValue = itemsArray[indexOfEntryPoint];
        isHigher = false;

        for (let element of itemsArray) {
            if (element <  entryPointValue) {
            isHigher = true;
            }
        }

        if (!isHigher) {
            return;

        } else {

            for (let i = 0; i < indexOfEntryPoint; i++) {
                if (itemsArray[i] < entryPointValue) {
                    leftSum += itemsArray[i];
                }
            }

            for (let i = indexOfEntryPoint + 1; i < itemsArray.length; i++) {
                if (itemsArray[i] < entryPointValue) {
                    rightSum += itemsArray[i];
                }
            }
        }

        if (leftSum >= rightSum) {
            console.log(`Left - ${leftSum}`);
        } else {
            console.log(`Right - ${rightSum}`);
        }

    } else if (priceRange === 'expensive') {
        let entryPointValue = itemsArray[indexOfEntryPoint];
        isLower = false;

        for (let element of itemsArray) {
            if (element >  entryPointValue) {
            isLower = true;
            }
        }

        if (!isLower) {
            return;

        } else {

            for (let i = 0; i < indexOfEntryPoint; i++) {
                if (itemsArray[i] >= entryPointValue) {
                    leftSum += itemsArray[i];
                }
            }

            for (let i = indexOfEntryPoint + 1; i < itemsArray.length; i++) {
                if (itemsArray[i] >= entryPointValue) {
                    rightSum += itemsArray[i];
                }
            }
        }

        if (leftSum >= rightSum) {
            console.log(`Left - ${leftSum}`);
        } else {
            console.log(`Right - ${rightSum}`);
        }
    }

}

// angryTom(
//     [1, 5, 1],
//     1, 
//     "cheap"
// );

// angryTom(
//     [6, 5, 6],
//      1, 
//     "cheap"
// );

// angryTom(
//     [1, 5, 1],
//      1, 
//     "expensive"
// );
    
angryTom(
    [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive"
);
