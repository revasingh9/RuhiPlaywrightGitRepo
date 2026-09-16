

var reverseonlyString =function(str){
    let inputArray = String(str).split('')
    let left =0
    let right = inputArray.length-1
const isLetter = (char) => /a-zA-z]/.test(char)

    while(left < right){
      
            if(!isLetter(inputArray[left])){
             left++
            }
                else if(!isLetter(inputArray[right])){
                    right--
                }
                else {
                    let temp = inputArray[left]
                    inputArray[left] = inputArray[right]
                    inputArray[right] = temp

                    left++
                    right--
                }
        }
   return inputArray.join('')
}
console.log(reverseonlyString('1ab6c78'))