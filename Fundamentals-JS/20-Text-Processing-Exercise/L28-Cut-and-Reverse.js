function solve(text) {
    let textLength = text.length;

    let firstHalf = text.substring(0, Math.ceil(textLength / 2));
    let secondHalf = text.substring(Math.floor(textLength / 2));
    
    console.log(reverseText(firstHalf).join(''));
    console.log(reverseText(secondHalf).join(''));


    function reverseText(string) {
        let stringArr = string.split('');
        stringArr.reverse();
        return stringArr;
    }    

}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');