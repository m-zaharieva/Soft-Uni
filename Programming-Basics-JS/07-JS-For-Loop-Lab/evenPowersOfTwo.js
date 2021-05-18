function evenPowersOfTwo (arg) {
    let num = Number(arg);

    for (let i = 0; i <= num; i += 2) {
        console.log(Math.pow(2,i));
    }
}

evenPowersOfTwo("7");