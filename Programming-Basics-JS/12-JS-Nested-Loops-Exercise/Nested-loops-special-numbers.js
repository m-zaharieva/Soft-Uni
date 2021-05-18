function specialNumbers(input) {
    let num = Number(input[0]);
    let specialNum = 0; 
    let result = "";

    for (let i = 1; i <= 9; i++) {
        if (num % i === 0) {
            for (let j = 1; j <= 9; j++) {
                if (num % j === 0) {
                    for (let k = 1; k <= 9; k++) {
                        if (num % k === 0) {
                            for (let m = 1; m <= 9; m++) {
                                if (num % m === 0) {
                                    specialNum = `${i}${j}${k}${m} `; 
                                    result += specialNum; 
                                } else {
                                    continue;
                                }
                            }
                        }  else {
                            continue;
                        }
                    }
                } else {
                    continue;
                }
            }
        } else {
            continue;
        }
    }
    console.log(result);
}

specialNumbers(["16"]);