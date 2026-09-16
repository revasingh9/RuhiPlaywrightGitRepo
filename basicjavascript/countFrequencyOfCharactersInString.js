


var countFrequencyOfCharactersInString = function(str){
       let frequencyOfCharacter = {}
    let splittedCharracter = String(str).split('')


    for(let i=0; i< splittedCharracter.length;i++){
        let char =splittedCharracter[i]
       
            if( frequencyOfCharacter[char]){

                frequencyOfCharacter[char]++

            }
            else{
                frequencyOfCharacter[char]=1
            }
            


        }

       
 
    return frequencyOfCharacter
}
console.log(countFrequencyOfCharactersInString('madam'))

function charcOccurance(str6){

   let char7 =/[A-Za-z]/ 

   let countcharcOccurance = 0

   for(let char of str6){
      if(char7.test(char)){
         countcharcOccurance++
      }


   }

return countcharcOccurance
}

console.log(`Character Count : ${charcOccurance('Playwright')}`)

var countFrequency = function(str){
    let frequencyMap ={}

    for(let char of str){

        frequencyMap[char] = (frequencyMap[char] || 0) +1 
    }
return frequencyMap
}

console.log(countFrequency('coordination'))

var countFrequency1 = function(str1){
    const map = new Map()
    const inputArray = String(str1).split('')
    for(let char of inputArray){
       const currentCountt  =  map.get(char) ?? 0
       map.set(char,currentCountt +1)

    }
    return map

    
}
console.log(countFrequency1('playwright'))