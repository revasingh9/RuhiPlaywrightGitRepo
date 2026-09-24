

var reverseOnlyVowels = function(str){

    let left = 0
    let right = String(str).length -1
    const vowelsOnly = ['a','e','i','o','u']
     for(let char of str){
        if(str(char) === vowelsOnly){
            let temp = char[left]
            char[left] = char[right]
            char[left] =  temp
        
        }
         return str
     }
}
console.log(reverseOnlyVowels('Ruhi'))