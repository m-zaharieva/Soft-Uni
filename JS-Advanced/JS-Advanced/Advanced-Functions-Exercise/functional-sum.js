function add(num) {
    let sum = 0;
    function sumNumbers(number) {
        sum = sum + number;
        return sumNumbers;
    }

    sumNumbers.toString = () => { return sum };
    return sumNumbers(num);
}
console.log(add(1)(6)(-3).toString());
// let a = add(1);
// let b = a(6);
// let c = b(-3);