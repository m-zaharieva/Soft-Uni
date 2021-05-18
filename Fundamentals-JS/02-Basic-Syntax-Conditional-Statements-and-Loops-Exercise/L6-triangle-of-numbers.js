function triangle(num) {
    for (let i = 1; i <= num; i++) {
        let line = ""; 
        
        for (let j= 1; j <= i; j++) {
            line += i + ' ';
        }

        console.log(line);
    }
}

triangle(3);


// function triangle(n) {
    
//     for (let i = 1; i <= n; i++) {
//         let line = "";
//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }
//         console.log(line);
//     }
// }

// triangle(6);