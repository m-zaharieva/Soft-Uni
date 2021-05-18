function solve(arr) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    arr.forEach(text => {
        let matches = text.match(pattern);
        console.log(matches.join(' '));
    });
}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);