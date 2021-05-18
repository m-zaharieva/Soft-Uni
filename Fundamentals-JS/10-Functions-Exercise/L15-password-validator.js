function passwordValidator(passLog) {
    let letters = 0;
    let digits = 0; 
    let others = 0; 

    let inputLength = passwordLength(passLog); 
    let noOtheChars = lettersAndDigits(passLog);
    let twoAndMoreDigits = noLessThanTwoDigits(digits);
    
    if (inputLength && noOtheChars && twoAndMoreDigits) {
        console.log('Password is valid');
    }

    if (!inputLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!noOtheChars) {
        console.log('Password must consist only of letters and digits');
    }

    if (!twoAndMoreDigits) {
        console.log('Password must have at least 2 digits');
    }
    

    function passwordLength(passString) {
        let passLength = passString.length; 
        if (passLength < 6 || passLength > 10) {
            return false;
        } else {
            return true;
        }
    }

    function lettersAndDigits(passString) {
        let passArray = passString.split('');
        let charToNumArray = [];

        for (let i = 0; i < passArray.length; i++) {
            let numeric = passArray[i].charCodeAt(0);
            charToNumArray.push(numeric);
        }

        for (let i = 0; i < charToNumArray.length; i++) {
            if (charToNumArray[i] >= 48 && charToNumArray[i] <= 57) {
                digits++; 
            } else if (charToNumArray[i] >= 65 && charToNumArray[i] <= 90) {
                letters++;
            } else if (charToNumArray[i] >= 97 && charToNumArray[i] <= 122) {
                letters++;
            } else {
                others++; 
            }
        }

        if (others > 0) {
            return false;
        } else {
            return true;
        }
    }

    function noLessThanTwoDigits(num) {
        if (digits < 2) {
            return false;
        } else {
            return true;
        }
    }


}

passwordValidator('Pa$s$s');

//  • The length should be 6 - 10 characters (inclusive)
//  • It should consists only of letters and digits
//  • It should have at least 2 digits 