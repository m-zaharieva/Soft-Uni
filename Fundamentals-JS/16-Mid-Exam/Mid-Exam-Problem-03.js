function angryTom(itemsArray, entryPoint, priceValue) {
    let leftSum = 0; 
    let rightSum = 0; 

    if (priceValue === 'cheap') {
        let entryPointValue = itemsArray[entryPoint];
        for (let i = 0; i < entryPoint; i++) {
            if (itemsArray[i] < entryPointValue) {
                leftSum += itemsArray[i];
            }
        }

        for (let j = entryPoint + 1; j < itemsArray.length; j++) {
            if (itemsArray[j] < entryPointValue) {
                rightSum += itemsArray[j];
            }
        }

    } else if (priceValue === 'expensive') {
        let entryPointValue = itemsArray[entryPoint];
        for (let i = 0; i < entryPoint; i++) {
            if (itemsArray[i] >= entryPointValue) {
                leftSum += itemsArray[i];
            }
        }

        for (let j = entryPoint + 1; j < itemsArray.length; j++) {
            if (itemsArray[j] < entryPointValue) {
                rightSum += itemsArray[j];
            }
        }
    }
    
    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else if (rightSum > leftSum) {
        console.log(`Right - ${leftSum}`);
    }
}

angryTom(
    [6, 5, 6],
    1, 
    "cheap"
    );
    
    // angryTom(
    //     [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    //     7,
    //     "expensive")




// payback by breaking various household items.
// entry point, from which Tom will reak the items to his left and than to his right.
// Tom will never break the item at his entry point.
// calculate the damage ti Tom;s left and right. Rpint only the bigger damage to Tom;s household. 
// if Both sum are equal - print the left one. 
        
// first line - price ratings.
// second line - entry point. 
// 'cheap' - item that have lower price than the entry point item.
// 'expensive' - items, that have samo prise ot higher than the entry point. 