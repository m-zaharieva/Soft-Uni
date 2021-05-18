function commonElements(arrOne, arrTwo) {
    let areEqual = false;
    let commonEl = [];
    for (let i = 0; i < arrOne.length; i++) {
        let currentOne = arrOne[i];
            for (let j = 0; j < arrTwo.length; j++) {
                let currentTwo = arrTwo[j];

                if (currentTwo === currentOne) {
                    commonEl.push(currentOne);
                }
            }
    }

    console.log(commonEl.join('\n'));
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);