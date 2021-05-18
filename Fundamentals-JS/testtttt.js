function solve(input) {
    let inputArray = input.split(" ");
    let newArray = [];
    for (let symbol of inputArray) {
        symbol = symbol.toLowerCase();
        let count = 0;
        for (let symbol2 of inputArray) {
            symbol2 = symbol2.toLowerCase();
                if (symbol === symbol2) {
                count+=1;
            }
        }
 
        if (count % 2 === 1 && count !== 0) {
            newArray.push(symbol);
        }
    }
    let result = newArray.map(x => x.toLowerCase());
    let uniqueCHars = [...new Set(result)];
 
    console.log(...uniqueCHars);
 
}
 
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');