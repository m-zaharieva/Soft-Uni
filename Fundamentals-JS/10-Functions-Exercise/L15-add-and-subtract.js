function addAndSubtract(a, b, c) {
    
    let result = sub(add(a, b), c);
    
    function add(x, y) {
        let result = x + y;
        return result;
    }

    function sub(x, y) {
        let result = x - y;
        return result;
    }

    console.log(result);
}

addAndSubtract(23, 6 ,10);