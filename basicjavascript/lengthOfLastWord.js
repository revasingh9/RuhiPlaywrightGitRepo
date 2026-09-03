


var lastWordOfLength = function (str1){
 let count = 0
let str1WithoutWhiteSpace = String(str1).trim()
console.log(str1)
var inputArray = str1WithoutWhiteSpace.split('')

for(let i = inputArray.length-1; i >= 0;  i--){
    if (inputArray[i] != ' '){
        count = count +1 

    }
    else {
        if (count > 0)
           // console.log(count)
            break;
          
    }
}

  return count


}

console.log(lastWordOfLength('    Hello    World    '))