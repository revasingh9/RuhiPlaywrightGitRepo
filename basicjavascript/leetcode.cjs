const { constants } = require("buffer")

const nums =[9,6,4,2,3,5,7,0,1]
const sortedNums = nums.sort((a,b)=>a-b)
console.log(sortedNums)
const startNum = sortedNums[0]
const endNum = sortedNums[sortedNums.length-1]
const completeNums = [];
for(let i = startNum; i <= endNum; i++){
   completeNums.push(i)
}

console.log(completeNums)

for(const num of completeNums){
   
        console.log(num)
  
}   


var missingNumber = function(nums) {
const sortedNums = nums.sort((a,b)=>a-b)
console.log(sortedNums)

const completeNums = [];

for(let i = 0; i <= nums.length; i++){
   completeNums.push(i)
}

console.log(completeNums)

for(const num of completeNums){
    if(!sortedNums.includes(num)){
   
        return nums;
}   
}
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))



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

const nums1 = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums1))

// const strs = ["flower","flow","flight"]
// let longestCommonPrefix = strs[0]
// console.log(longestCommonPrefix)
// for (let i = 1; i < strs.length; i++) {
//     while (!strs[i].startsWith(longestCommonPrefix)) {
//         longestCommonPrefix = longestCommonPrefix.substring(0, longestCommonPrefix.length - 1);
//     }
// }

// console.log(longestCommonPrefix);

var longestCommonPrefix = function(strs) {
    
    let commonPrefix = strs[0]
    for(let i= 0; i< strs.length;i++){
        while(!strs[i].startsWith(commonPrefix)){
                  commonPrefix =commonPrefix.substring(0,commonPrefix.length-1)

        }
    }
    return commonPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

var removeDuplicates = function(nums) {
    let newNumArray =[]
    const newSortedNums= nums.sort((a,b)=>a-b)
    for(let i=0; i < newSortedNums.length;i++){
        if(!newNumArray.includes(newSortedNums[i])){
         newNumArray.push(newSortedNums[i])

        }
        
    }
    return newNumArray
    
};

console.log(removeDuplicates([1,1,2]))

var moveZeroes = function(nums) {

    let nonZeroArray =[]
    let zeroArray =[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
        zeroArray.push(nums[i])
        }
        else{
            nonZeroArray.push(nums[i])
        }
        
    }
    return [...nonZeroArray, ...zeroArray]
    
};
console.log(moveZeroes([0,1,0,3,12]))

var moveZeroes = function(nums5) {
    let writeIndex = 0;

    // Move all non-zero elements forward
    for (let i = 0; i < nums5.length; i++) {
        if (nums5[i] !== 0) {
            nums5[writeIndex] = nums5[i];
            writeIndex++;
        }
    }

    // Fill the remaining indices with zeros
    for (let i = writeIndex; i < nums5.length; i++) {
        nums5[i] = 0;
    }
};

// Test
let nums5 = [0, 1, 0, 3, 12];
moveZeroes(nums5);
console.log(nums5); // Output: [1, 3, 12, 0, 0]


var countConsonants  = function(inputString){
   
    let vowels =['a','i','e','o','u']
    let consonants  = []
    // Convert string to array of characters and iterate through them

    inputString.split('').forEach( (charc ) => {
        const lowerChar = charc.toLowerCase()
        if (lowerChar >= 'a' && lowerChar <= 'z' && !vowels.includes(lowerChar))
          {
            consonants.push(lowerChar)
        }
            
    });
    console.log(`Consonants found (${consonants.length})`,consonants.join(', '))
    return consonants.length;
}
countConsonants('Ruhi Kumari');

// Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function(x){
// Negative numbers are never palindromes (e.g., -121 reversed is 121-)
    if(x < 0)
return false
    const str = x.toString()
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr


}
console.log(isPalindrome(121))
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));

var romanToInteger = function(s){
  const roamanMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D': 500,
        'M' : 1000     

  }
   let total = 0;
   for(let i =0; i < s.length; i++){
   let current = roamanMap[s[i]]
    let next = roamanMap[s[i + 1]]
    if (current < next){
        total -= current
    }else {
        total += current
    }
   }
  return total;

}

console.log(romanToInteger("III"));     // Output: 3
console.log(romanToInteger("IV"));      // Output: 4
console.log(romanToInteger("IX"));      // Output: 9
console.log(romanToInteger("LVIII"));   // Output: 58 (L + V + III)
console.log(romanToInteger("MCMXCIV"))


var commonLongestPrefix = function(strs9){
    if (!strs9.length) return ""

    let newString = strs9[0]
   for(let i = 1; i < strs9.length; i++){
       while(!strs9[i].startsWith(newString)){
        newString = newString.substring(0, newString.length - 1)
        if(newString === "") return ""
       }

   }
 return newString;
}
console.log(commonLongestPrefix(["flower","flow","flight"]))