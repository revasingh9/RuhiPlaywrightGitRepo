



var countVowels = function(str4){

    const vowels = ['a','i','e','o','u']
    let splittedArray = String(str4).toLowerCase().split('')
    console.log(splittedArray)
    let countVowels1 = 0
    
    
    for(let i =0 ; i<= splittedArray.length;i++){
        if(vowels.includes(splittedArray[i])){
            countVowels1++


        }
    }
    return countVowels1



} 

console.log(countVowels('Ruhi'))

const countVowels2 = (str) =>{
    const vowels = new Set(['a','e','i','o','u'])
    let count = 0

    for(const char of String(str).toLowerCase()){
        if(vowels.has(char)) count++;
    }
    return count;

}

console.log(countVowels2('Ruhi'))


