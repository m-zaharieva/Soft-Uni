function encodeAndDecodeMessages() {
    let senderTextArea = document.getElementsByTagName('textarea')[0];
    console.log(senderTextArea);
    let recieverTextArea = document.getElementsByTagName('textarea')[1];

    let buttons = document.querySelectorAll('#main button');

    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            let buttonText = btn.textContent;

            if (buttonText == 'Encode and send it') {
                let encodeResult = encode(senderTextArea.value);
                recieverTextArea.value = encodeResult;
                senderTextArea.value = '';
            } else {
                let decodeResult = decode(recieverTextArea.value);
                recieverTextArea.value = decodeResult;
            }
        })
    }


    function encode(string) {
        let stringArray = string.split('');
        let newArray = stringArray.map(x => {
            let xNum = x.charCodeAt();
            xNum += 1;
            x = String.fromCharCode(xNum);
            return x;
        })
        return newArray.join('');
    }


    function decode(string) {
        let stringArray = string.split('');
        let newArray = stringArray.map(x => {
            let xNum = x.charCodeAt();
            xNum -= 1;
            x = String.fromCharCode(xNum);
            return x;
        })
        return newArray.join('');
    }
}
