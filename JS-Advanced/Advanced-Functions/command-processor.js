function solution() {
    let text = '';
    return {
        append(string) {
            text += string;
        },
        removeStart(num) {
            text = text.substr(num);
        }, 
        removeEnd(num) {
           text = text.substr(0,text.length - num);
        },
        print() {
            console.log(text);
        }
    }
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();