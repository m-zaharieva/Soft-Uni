function rightPlace (string, char, template) {
    let result = string.replace('_', char);

    if (result === template) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

rightPlace('St_ng', 'I', 'Strong');