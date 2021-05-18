function foreignLanguage(country) {
    switch (country) {
        case 'England': 
        case 'USA': console.log('English'); break; 
        case 'Spain':
        case 'Argentina':
        case 'Mexico': console.log('Spanish'); break;
        default: console.log('unknown');
    }
}

foreignLanguage("USA");



// function solve(countryName) {
//     switch(countryName) {
//         case "USA":
//         case "England": console.log("English"); break;
//         case "Spain":
//         case "Argentina": 
//         case "Mexico": console.log("Spanish"); break; 
//         default: console.log("unknown"); 

//     }
// }

// solve();