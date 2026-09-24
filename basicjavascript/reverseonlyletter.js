

// var reverseonlyString =function(str){
//     let inputArray = String(str).split('')
//     let left =0
//     let right = inputArray.length-1
// const isLetter = (char) => /a-zA-z]/.test(char)

//     while(left < right){
      
//             if(!isLetter(inputArray[left])){
//              left++
//             }
//                 else if(!isLetter(inputArray[right])){
//                     right--
//                 }
//                 else {
//                     let temp = inputArray[left]
//                     inputArray[left] = inputArray[right]
//                     inputArray[right] = temp


//                     left++
//                     right--
//                 }
//         }
//    return inputArray.join('')
// }
// console.log(reverseonlyString('1ab6c78'))



var reverseOnlyLetter = function(str){
    let left = 0
    let right = str.length- 1
    let isLetter = (char)=>(/[a-zA-Z]/).test(char)
    let splittedChar = String(str).toLowerCase().split('')
    while(left < right){
        if(!isLetter(splittedChar[left])){
            left++
        }
        else if(!isLetter(splittedChar[right])){
         right--
        }
           
    
    else {
        let temp = splittedChar[left]
        splittedChar[left] = splittedChar[right]
        splittedChar[right] = temp
      left++
    right--
    }
}

return splittedChar.join('')
}

console.log(reverseOnlyLetter('1ab6c78'))