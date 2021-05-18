function loadingBar(number) {
    let loadBar = progressBar(number)

    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        console.log(`${number}% [${loadBar}]`);
        console.log('Still loading...');
    }

    function progressBar(a) {
       let percents = a / 10; 
       let bar = '';
       for (let i = 0; i < percents; i++) {
           bar += '%';
       } 

       for (let j = 0; j < 10 - percents; j++) {
           bar += '.';
       }
       return bar;
    }
}

loadingBar(30);

// 30% [%%%.......]
// Still loading...

// 100% Complete!
// [%%%%%%%%%%]