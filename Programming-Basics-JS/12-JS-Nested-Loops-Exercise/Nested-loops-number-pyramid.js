function numberPyramid(n) {
    let current = 1; 
    let isBigger = false; 
    let printCurentLine = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (current > n) {
                isBigger = true;
                break; 
            }
            printCurentLine += current + " "; 
            current++;
        }
        console.log(printCurentLine);
        printCurentLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["12"]);