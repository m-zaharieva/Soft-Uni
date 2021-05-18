function sortByTwoCriteria(input) {
    let copyOfArray = input.slice();
    copyOfArray.sort(customSorting);

    console.log(copyOfArray.join('\n'));

    function customSorting(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

//sortByTwoCriteria(["alpha", "beta", "gamma"]);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George", 'Aarie']);