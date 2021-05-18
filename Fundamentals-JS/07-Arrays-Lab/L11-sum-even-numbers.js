function sumNumbers(nums) {
    
    let sum = 0; 

    for (let index = 0; index < nums.length; index++) {
        let num = Number(nums[index]);

        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sumNumbers(['1', '2', '3', '4', '5', '6']);