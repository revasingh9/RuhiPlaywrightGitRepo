//Find max/min number
console.log("basic03.js is running");
const array1 = [1,4,9,0,6,8,2,5]
const miniNum = Math.min(...array1)
console.log(miniNum)
const maxNum =Math.max(...array1)
console.log( maxNum)

const maxNum1 = array1.reduce((max,current) =>
     current > max ? current : max)
const minNum1 = array1.reduce((min,current) =>
     current < min ? current : min)
console.log(`Maximum Number : ${maxNum1}`)
console.log(`Minimum Number : ${minNum1}`)

//Find duplicates

const duplicateNumRemove =[ 3,3,3,5,6,7,7,4,4,1,1,1]
const assortedNumber = duplicateNumRemove.sort((a,b) => a-b)
const findDuplicateNumber = assortedNumber.filter((nums,index) => assortedNumber.indexOf(nums)!== index)
console.log(findDuplicateNumber)

//Get unique duplicate numbers
// const duplicates = [...new Set(
//   numbers.filter((num, index) => numbers.indexOf(num) !== index)
// )];

//Reverse array

const arryReversed =[ 3,3,3,5,6,7,7,4,4,1,1,1]
console.log([...arryReversed].reverse())
//Sum of array

const numToAdd = [ 3,3,3,5,6,7,7,4,4,1,1,1]
let sum = 0
for (let i =0;i<numToAdd.length;i++)
{
    sum += numToAdd[i]
}

console.log(`Total sum: ${sum}`)
for(const num of numToAdd){
    sum+=num
}
console.log(`Total sum: ${sum}`)

// Merge arrays
const arr1 = [1,3,5,7]
const arr2= [2,4,6,8]
console.log([...arr1, ...arr2])