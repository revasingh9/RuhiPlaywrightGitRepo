var printAllEvenWORDSOFsTRING = function (str){

     let trimwhitespaceofchar = String(str).trim(' ')
     let converStringToArray = trimwhitespaceofchar.split(' ')


     for(let char of converStringToArray){
        if (char.length % 2 === 0){
            console.log('Character is even :',char)
        } 
     }

}


printAllEvenWORDSOFsTRING('Sky is blue and vast')

var getEvenWords = function (str) {
  return String(str)
    .trim()
    .split(/\s+/)
    .filter(word => word.length % 2 === 0);
};

// Now logging the function call will output the array instead of undefined
console.log(getEvenWords('Sky is blue and vast'));