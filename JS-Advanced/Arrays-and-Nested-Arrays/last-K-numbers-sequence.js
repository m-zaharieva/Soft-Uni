function solve(n, k) {
    n = Number(n);
    k = Number(k);

    let result = [1];

    for (let i = 1; i < n; i++) {
        let dif = i-k;
        if (dif < 0) {
            dif = 0;
        }
        let temp = result.slice(dif, i);
        let redused = temp.reduce((acc, el) => acc + Number(el), 0);
        
        result.push(redused);
    }

    console.log(result);
}

solve(8, 2);