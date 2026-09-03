


const nonDuplicate = function(newArray1){
newArray1 = newArray1.sort()
let newArray2 = []
newArray2[0] = newArray1[0]
let k = 1 

for(let i=0; i< newArray1.length-1; i++){
        if(newArray1[i]!== newArray1[i+1]){
               newArray2[k] =newArray1[i+1]
               k++
        }
     }
   // console.log(newArray2)
   // console.log(newArray2.reverse())
return newArray2.reverse()
}

let newArray1 =[0,0,1,1,1,2,2,3,3,4]
console.log(nonDuplicate(newArray1))



var missingNumber = function(nums) {
const newNums = nums.sort((a, b) => a - b);
const highestNumber = Math.max(...newNums)
const lowerNumber = 0
 const Range = [];

for (let i = lowerNumber; i <= highestNumber; i++) {
  Range.push(i);
}
console.log("lowerNumber", lowerNumber)
console.log("Range", Range)
console.log("newNums", newNums)
const missing = Range.filter(num => !newNums.includes(num));
console.log("missing Number", ...missing)
    return missing.length > 0 ? missing[0] : highestNumber + 1;

}

const nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))