function solve(arr) {
    let caloriesObj = {};
    for (let i = 0; i < arr.length; i+=2) {
            caloriesObj[arr[i]] = Number(arr[i + 1]);
    }

    console.log(caloriesObj);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);