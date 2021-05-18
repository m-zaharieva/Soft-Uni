function signCheck(a, b, c) {
        let result = '';
    if (a >= 0 && b >= 0 && c >= 0 || 
        a >= 0 && b <= 0  && c <= 0 || 
        a <= 0  && b >= 0 && c <= 0 || 
        a <= 0  && b <= 0  && c >= 0) {
            result = 'Positive';
    } else if (a < 0 && b < 0 && c < 0 ||
               a > 0 && b > 0 && c < 0 ||
               a > 0 && b < 0 && c > 0 ||
               a < 0 && b > 0 && c > 0) {
            result = 'Negative';
               }

    console.log(result);
}

signCheck(-6, -12, 14);