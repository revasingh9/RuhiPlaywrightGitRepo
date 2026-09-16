var missingNumberInArray = function (num){
    let lowerLimit = Math.min(...num)
    let maxLimit = Math.max (...num)
    let totalSum = ''
    let actualSum =0

  
     for( let i = lowerLimit; i<= maxLimit; i++){
         totalSum =  totalSum+i

     }

     for (let currentNum of num){
actualSum += currentNum


     }
     return totalSum - actualSum

   
}
console.log(missingNumberInArray([6,9,10,17,25,30]))


var missingNumberInArray = function (num) {

  if (!num || num.length === 0) return [];
  let lowerLimit = Math.min(...num)-1;
  let maxLimit = Math.max(...num)+1;
  let numSet = new Set(num);
  let missingNumbers = [];

  for (let i = lowerLimit; i <= maxLimit; i++) {
    // If the number doesn't exist in our array set, it's missing!
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};

console.log(missingNumberInArray([6,9,10,17,25,30])); // Output: [3, 4]