function countTheWords (textInput) {
    let text = textInput;
    let spaces = 0
    let words = 1; 
    for (let i = 0; i < text.length; i++) {
        spaces = text[i];
            if (spaces === " ") {
                words += 1;
            }
    }

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words. `);
    } else {
        console.log("The message was send successfully!");
    }    
}

countTheWords("This message has exactlly eleven words. One more as it's allowed!");

//The message is too long to be send! Has 11 words. 
//The message was send successfully!