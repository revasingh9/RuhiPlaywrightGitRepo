

var isCharPallindrome = function (str){

     let cleanedStr  = String(str).replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
     console.log('Cleaned Str: ',cleanedStr)
     let reversedStr = cleanedStr.split('').reverse().join('')
     console.log('ReversedStr: ', reversedStr)

     return cleanedStr === reversedStr;
};



console.log(isCharPallindrome('A man, a plan, a canal: Panama'))
console.log(isCharPallindrome('race a Car'))

var isPalindromeTwoPointer = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (left < right && !/^[a-zA-Z0-9]$/.test(str[left])) {
      left++;
    }
    // Skip non-alphanumeric characters from the right
    while (left < right && !/^[a-zA-Z0-9]$/.test(str[right])) {
      right--;
    }

    // Compare characters (ignoring case)
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false; // Character mismatch, not a palindrome
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindromeTwoPointer('A man, a plan, a canal: Panama')); // true

var isPallindrome3 = function(str){

  const lowerCase = String(str).toLowerCase().replace(/[^a-zA-Z0-9]/g,'')


  
  let left = 0;
  let right = lowerCase.length-1


  while(left < right){

   if(lowerCase[left] !== lowerCase[right])
    {
       return `"${str}" is NOT a palindrome.`

   }
    left++;
    right--;
  }
 return lowerCase

}



console.log(isPallindrome3("A man, a plan, a canal: Panama")); 


console.log(isPallindrome3("hello world"));