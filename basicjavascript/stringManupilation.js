//Reverse string
 let str = ['Cow','Dog','rat']
//  const splitStr1 = (str.toString().toLowerCase()).split(',')
//  console.log(splitStr1.reverse())

 const splitStr =(str.join('')).toLowerCase()
 console.log(splitStr)
 console.log((splitStr.split('')).reverse().join( ' '))


 //Check palindrome
 let pallidromeletter =['BOB','Radar','Level','Noon',"Madam"]
 let cleanString = (pallidromeletter.toString().toLowerCase()).split(',')
 console.log(cleanString)

 console.log(cleanString.reverse().join(' '))

 function pallidromeletterCheck(word){
    let cleanString = word.toLowerCase()
    let reverseWord = cleanString.split('').reverse().join('')
    return cleanString === reverseWord;

 }
 console.log(pallidromeletterCheck("Racecar")); // true
console.log(pallidromeletterCheck("Playwright")); // false
console.log(pallidromeletterCheck("Level"))

let str3 = ['BOB','Radar','Level','Noon',"Madam"]
let newstr1 = (str3.join(' ').toLowerCase())
console.log("Splitted Array:",newstr1)
let splittedChar =newstr1.split('')
console.log('Splitted Char:', splittedChar)
const vowel =['a','e','i','o','u']
let totalVowelCount =0 
for(let i= 0; i<splittedChar.length; i++){
    for(let j=0; j< vowel.length;j++){      //if(vowel.includes(cleanString[i]))
        if(vowel[j] === splittedChar[i]){
           totalVowelCount++
           
        }
           
    }
 
}
console.log('Vowel count is :',totalVowelCount)

function countVowels(str4){
    let newstr2 = (str4.toLowerCase())

const vowels1 =['a','e','i','o','u']
let totalVowelCount1 =0 
for(let char of  newstr2){

    if(vowels1.includes(char)){
        totalVowelCount1++
      
           
    }
 }

return totalVowelCount1++
      ;

}

console.log(countVowels("Playwright")); // Output: 2  (a, i)
console.log(countVowels("Automation")); // Output: 5  (u, o, a, i, o)
console.log(countVowels("DoG"));

function countVowelsRegEx(str) {
  // /[aeiou]/gi looks for all vowels (g = global search, i = case-insensitive)
  const matches = str.match(/[aeiou]/gi);
  
  // If matches are found, return the length of the matches array; otherwise return 0
  return matches ? matches.length : 0;
}

// Examples:
console.log(countVowelsRegEx("TypeScript")); // Output: 2 (e, i)
console.log(countVowelsRegEx("AEIOU"));      // Output: 5 (All vowels)
console.log(countVowelsRegEx("Rhythm"));     // Output: 0 (No vowels)


//
function isValid(str){
const stack = []
const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
}

for (let char of str) {
    if (char in brackets) {
       const topElement = stack.length > 0 ? stack.pop(): '#'
       if (brackets[char] !== topElement) {
                return false;
            }
    }

else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("([)]")); // Output: false  
console.log(isValid("")); // Output: true                    