function listProcessor(arr) {
    let result = [];

    let finalArray = function () {
        for (const element of arr) {
            let [action, string] = element.split(' ');
            if (action == 'add') {
                add(string);
            } else if (action == 'remove') {
                remove(string);
            } else {
                print();
            }
        }
    };

    return finalArray();

    function add(text) {
        result.push(text);
    }

    function remove(text) {
        result = result.filter(x => x !== text);
    }

    function print() {
        console.log(result.join(','));
    }
}

listProcessor(['add pesho', 'print', 'add george', 'add peter', 'print', 'remove peter', 'print']);


// function listProcessor(arr) {
//     let commandArr = [];
//     arr.forEach(element => {
//         let [action, string] = element.split(' ');
//         let temp = [action, string];
//         commandArr.push(temp);
//     });
//     function solve() {
//         let result = [];
//         commandArr.forEach(arr => {
//             if (arr[0] == 'add') {
//                 result.push(arr[1]);
//             } else if (arr[0] == 'remove') {
//                 if (result.indexOf(arr[1]) >= 0) {
//                     let index = result.indexOf(arr[1]);
//                     result.splice(index, 1);
//                 }
//             } else {
//                 if (result.length > 0) {
//                     console.log(result.join(','));
//                 }
//             }
//         })
//     }

//     return solve();
// }

// listProcessor(['add pesho', 'print', 'add george', 'add peter', 'print', 'remove peter', 'print']);