function password(inputData) {

    let username = inputData.shift(); //"Nakov" - ["1234", "Pass", "1324", "1234"]
    let password = inputData.shift(); //"1234"  - ["Pass", "1324", "1234"]

    let index = 0; 
    let data = inputData[index];

    while (data !== password) {   
        index++
        data = inputData[index];
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);