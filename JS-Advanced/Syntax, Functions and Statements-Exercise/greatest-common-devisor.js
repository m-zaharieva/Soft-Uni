function solve(a, b) {
    let min = Math.min(a, b);
    let maxDevisior = 0;
    for (let dev = min; dev >= 1; dev--) {
        if (a % dev == 0 && b % dev === 0 ) {
            maxDevisior = dev;
            break;
        }
    }
    console.log(maxDevisior);
}

solve(2154, 458);
