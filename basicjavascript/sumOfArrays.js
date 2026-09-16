

var sumOfArrays = function(nums) {

     let totalOfArray = 0

     for(let i =0; i <= nums.length-1; i++){
        totalOfArray = totalOfArray +nums[i] 
     }
     return totalOfArray
}

console.log(sumOfArrays([1,24,33,44]))

const sumOfArrays1 = (nums) => nums.reduce((sum,current) => sum + current, 0)
console.log('Total Sum Of Array:',sumOfArrays1([1,24,33,44]))