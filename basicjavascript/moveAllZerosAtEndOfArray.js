


var moveAllZerosAtEndOfArray = function(nums){

    let zeroArray = []
    let allNumericArray =[]

    for (let i =0; i< nums.length-1; i++){
        if(nums[i] != 0) 
            {
                allNumericArray.push(nums[i])

        } else if (nums[i] ===0){
            zeroArray.push(nums[i])
        }
    }
    return[...allNumericArray,...zeroArray]
    
}

console.log(moveAllZerosAtEndOfArray([1,0,2,0,3,0]))

var moveZeroesSinglePass = function(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        // Whenever we find a non-zero element
        if (nums[i] !== 0) {
            // Swap current element with the element at insertPos
            let temp = nums[i];
            nums[i] = nums[insertPos];
            nums[insertPos] = temp;

            // Move the insert position forward
            insertPos++;
        }
    }

    return nums;
};

// Test
let arr = [0, 1, 0, 3, 12];
console.log(moveZeroesSinglePass(arr)); // Output: [1, 3, 12, 0, 0]

var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }

    // Fill the remaining spots with zeros
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};

console.log(moveZeroes([1, 0, 2, 0, 3, 0])); 
// Output: [1, 2, 3, 0, 0, 0]
