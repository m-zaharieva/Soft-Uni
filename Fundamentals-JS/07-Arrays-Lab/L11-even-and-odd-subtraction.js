function evenAndOdd(nums) {
    let sumEven = 0; 
    let sumOdd = 0;

    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];

        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }

    }

    console.log(sumEven - sumOdd);
}

evenAndOdd([1, 2, 3, 4, 5, 6]);