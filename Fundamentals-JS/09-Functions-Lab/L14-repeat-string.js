function repeatString(str, n) {
    function solve(){
        let result = '';

        for (let i = 0; i < n; i++) {
            result += str;
        }

        return result;
    }

    console.log(solve());
}

repeatString('abc', 3);