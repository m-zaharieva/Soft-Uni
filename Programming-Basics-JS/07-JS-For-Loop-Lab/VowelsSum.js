function VowelsSum (textArg) {
    let text = textArg;
    let result = 0;
    for(let i = 0; i < text.length; i++) {
        let characters = text[i];
            switch(characters) {   
                case "a": result += 1; break; 
                case "e": result += 2; break; 
                case "i": result += 3; break; 
                case "o": result += 4; break; 
                case "u": result += 5; break; 
            }
            
    }
    console.log(result);
}

VowelsSum("hello");