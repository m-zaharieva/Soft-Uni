let guests = 101;
let engagement = new Promise(function (resolve, reject) {
    if (guests > 100) {
        reject('Wedding too big');
    } else {
        resolve('Let\'s get marry');
    }
});

engagement
    .then(function (message) {
        console.log('Promise fullfiled');
        console.log(message);
    })
    .catch(function (error) {
        console.log('Promise rejected');
        console.log(error);
    })