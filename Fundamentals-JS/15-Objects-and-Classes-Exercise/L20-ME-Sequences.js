function sequance(inputArray) {
    let sortedArr = [];
    inputArray.forEach(line => {
        let sequance = JSON.parse(line);
        let sorted = sequance.sort((a,b) => b - a);
        sortedArr.push(sorted);
    });
    
    let uniqueElementsArr = [];

    for (let i = 0; i < sortedArr.length; i++) {
        let isUnique = true;
        let currentArr = sortedArr[i];
        
        for (let j = 0; j < uniqueElementsArr.length; j++) {
            let nextArray = uniqueElementsArr[j];
            if (currentArr.toString() === nextArray.toString()) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            uniqueElementsArr.push(currentArr);
        }
    }

    uniqueElementsArr = uniqueElementsArr.sort((a,b) => a.length - b.length);
    
    
    uniqueElementsArr.forEach(line => {
        console.log(`[${line.join(', ')}]`);
    }); 
}

sequance(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);