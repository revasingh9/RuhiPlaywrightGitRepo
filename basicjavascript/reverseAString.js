



var revarsedWord = function(str){
    const chatToLowerCase = String(str).toLowerCase()
    const splittedChar = chatToLowerCase.split('')

    let revesredResult = ''
        for(let i= splittedChar.length-1; i>= 0 ;i--){
           revesredResult += splittedChar[i]
        }
    return revesredResult
}
console.log(`RevarsedWord: ${revarsedWord("Hello")}`)


var reversedWord = function(str1){

    const convertLowerCase = String(str1).toLowerCase()
    const toArrayChar = convertLowerCase.split('')
    const reversedChar = toArrayChar.reverse().join('')
    return reversedChar
}

console.log(reversedWord('Hello'))

//Reverse a word in two pointer

var reversedWord1 = function(str2){

    const convertLowerCase1 = String(str2).toLowerCase()
    const toArrayChar1 = convertLowerCase1.split('')
    
    let left = 0;
    let right = toArrayChar1.length-1


    while(left < right){
        let temp = toArrayChar1[left]
        toArrayChar1[left] = toArrayChar1[right]
        toArrayChar1[right] = temp
     left++;
     right--
    }
    return toArrayChar1.join('')
}
console.log(`ReversedWord1, ${reversedWord1('Hello')}`)