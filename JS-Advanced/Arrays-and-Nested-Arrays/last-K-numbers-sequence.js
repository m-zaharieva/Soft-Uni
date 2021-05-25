function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let dif = i-k;
        if (dif < 0) {
            dif = 0;
        }
        let temp = result.slice(dif, i).reduce((acc, el) => {
            return acc + Number(el);
        }, 0);
        
        result.push(temp[0]);
    }

    console.log(result);
}

solve(6, 3);