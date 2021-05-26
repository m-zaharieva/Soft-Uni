function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let temp = result.slice(-k);
        let redused = temp.reduce((acc, el) => acc + Number(el), 0);
        result.push(redused);
    }

    return result;
}

solve(8, 2);