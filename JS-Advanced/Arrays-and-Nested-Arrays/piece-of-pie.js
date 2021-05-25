function solve(array, startFlsvor, endFlavor) {
    let startIndex = array.indexOf(startFlsvor);
    let endIndex = array.indexOf(endFlavor);
    let result = array.slice(startIndex, endIndex + 1);
    console.log(result);
}


solve(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);