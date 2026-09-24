

var stringmanipultaion = function(str){
 
   let isLetter = (char) =>(/[a-zA-Z]/).test(char)
   let isDigit = (char) => (/[0-9]/).test(char)

   let emptyArray =[]
   let sum =0 

    for(let char of str){
        if(isLetter(char)){
           emptyArray.push(char)
        }
        else if(isDigit(char)){
            sum += Number(char)

        }
    }
return {
    cleanedString : emptyArray.join(''),
    digitSum: sum
}

}
console.log(stringmanipultaion('r@56vi ku$%mar67'))