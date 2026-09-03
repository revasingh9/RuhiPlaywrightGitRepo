

var expenses = [200,150,78,10,78]

var totalExpenses =0;
 for (let num of expenses ){
    totalExpenses = num +totalExpenses
    
     console.log(num)
    
 }


  console.log("Total Expense:",totalExpenses)
  console.log(`${expenses.join(' + ')} = ${totalExpenses}`)

console.log(`Highest Number:, ${Math.max(...expenses)}`)
console.log(`Lowest Number:, ${Math.min(...expenses)}`)

totalExpenses = expenses.reduce((num,sum) =>sum+num,0)
console.log(totalExpenses)
console.log(`${expenses.join(' + ')} = ${totalExpenses}`);


var num =[1,6,8,9,10,6,6,9,9]
num.sort((a,b)=> a-b)

console.log(num)


for(let i=1; i<num.length;i++){
   if(num[i] === num[i+1]){
    console.log(`Duplicate number found:, ${num[i]}`)

  
    
    }
 }
   

 let vowels2 =['a','i','e','o','u']
 let str5 =['Mug','Rain','Train','Tree']
 let newstr5 = str5.join('').toLowerCase()
 console.log('New Str:', newstr5)
 let splittedNewStr = newstr5.split('')
 console.log('Splitted New String:',splittedNewStr)
 let countVowels = 0
//  const countVowels =(str5.slice(' ')).toString()
//  console.log(countVowels)
 for(let i=0; i<splittedNewStr.length; i++){
   if(vowels2.includes(splittedNewStr[i])){
    
    countVowels++
 }
}
console.log(countVowels)

function countVowels3(array){
 let vowels4 = ['a','i','e','o','u']
let newstr6 = array.join('').toLowerCase()
 console.log('New Str:', newstr6)
 let splittedNewStr1 = newstr6.split('')
 console.log('Splitted New String:',splittedNewStr1)
 let countVowels5 = 0
 for(let char of splittedNewStr1){
   if(vowels4.includes(char)){
    countVowels5++
   
 }
}
return countVowels5
}
 console.log(countVowels3(['MUG',"Rain",'Train']))


function hasVowels(array) {
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  const cleanStr = array.join('').toLowerCase();
  
  // Turn the string into characters and check if "some" character is a vowel
  return cleanStr.split('').some(char => vowels.includes(char));
}

console.log(hasVowels(['MUG', 'Rain', 'Train'])); // Output: true
console.log(hasVowels(['Dry', 'Fly', 'Rhythm'])); // Output: false
function hasVowelsLoop(array) {
  let vowels = ['a', 'i', 'e', 'o', 'u'];
  let newstr = array.join('').toLowerCase();
  
  for (let char of newstr) {
    if (vowels.includes(char)) {
      return true; // Stop everything and return true immediately!
    }
  }
  
  return false; // If the loop finishes and found nothing, return false
}

console.log(hasVowelsLoop(['MUG', 'Rain', 'Train'])); // Output: true
console.log(hasVowelsLoop(['Sky', 'Glyn']));          // Output: false


//Character occurrence count

function charcOccurance(str6){

   let char7 =(/[A-Za-z]/g)  

   let countcharcOccurance = 0

   for(let char of str6){
      if(char7.test(str6)){
         countcharcOccurance++
      }

return countcharcOccurance

   }


}

console.log(`Character Count : ${charcOccurance('Playwright')}`)

function countSpecificChar( str,targetChar ){

   let count7 = 0;
   let cleanStr = str.toLowerCase()
   let cleanTarget = targetChar.toLowerCase()
   for (let char of cleanStr) {
        if (char === cleanTarget) {
            count7++;
        }
    }

    return count7;

}

console.log(countSpecificChar('Occurance', 'c'));


function getSecondLargestSort(arr) {
  // 1. Remove duplicates using a Set: [10, 20, 20, 5] -> [10, 20, 5]
  const uniqueNumbers = [...new Set(arr)];

  // 2. Sort the unique numbers in descending order (highest to lowest)
  uniqueNumbers.sort((a, b) => b - a);

  // 3. Index 0 is the largest, Index 1 is the second largest!
  return uniqueNumbers[1];
}

// Example:
console.log(getSecondLargestSort([10, 5, 20, 20, 8, 12])); 
// Output: 12


let numsOfArray = [9,6,4,2,3,5,7,0,1]
let newNumsOfArray = numsOfArray.sort((a,b)=> b-a)
let missingArrayNumber = null

for(let i =0; i<newNumsOfArray.length; i++ ){
   let expectedNumber = newNumsOfArray.length -i;
   if (newNumsOfArray[i] !== expectedNumber){
      missingArrayNumber = expectedNumber
      break;
   
   }
  
}
 
console.log("Missing number is:",missingArrayNumber );


let studentnmaes =['John','Hunter','Ryan', 'Mike']

studentnmaes.unshift('Tom')
studentnmaes.pop()
console.log(studentnmaes)

let newStudentsName = studentnmaes.join(' ')
let  studentToLowerCase= newStudentsName.toLowerCase()
console.log(newStudentsName)
console.log(studentToLowerCase)

let productPrices = [60,80,110,40,30,20]
let discountedPrices = [];
let affordableProducts = [];
for(let price of productPrices){
   let discountedPrices = productPrices-(productPrices * .1)
   discountedPrices.push(discountedPrices);
if(discountedPrices  > 50){
   affordableProducts.push(discountedPrice);

}
}
let totalSum =0
for(let i=0;i<affordableProducts.length;i++){
   totalSum = affordableProducts++
}
console.log(totalSum)

var longestCommonprefix = function(strs){
   let commonprefix = strs[0]
   for (let i=0; i<= strs.length;i++ ){

   }
}