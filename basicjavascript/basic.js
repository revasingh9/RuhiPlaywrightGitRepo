let tempINFahrenheit = 32
let celsius = (tempINFahrenheit - 32) *5/9
console.log(celsius)

var twoSum = function(nums, target) {
     
for(let i=0; i<nums.length; i++){
       for(let j=i+1 ;j <nums.length; j++){
       const  sum =nums[i]  + nums[j]
         console.log(`nums[${i}] + nums[${j}]=${nums[i]} + ${nums[j]} = ${sum}`);
           if (sum === target){
       console.log(`Found: indices [${i}, ${j}]`);
          return[i,j]
           }
  
        }
    }
  return[ ]   
};

let twoNumberIndices = twoSum([3,7,2,8,9],9);
console.log(twoNumberIndices)

var longestCommonPrefix =function(strs){
      if(!strs || strs.length === 0){
        return ""
    }
    let firstWord = strs[0];
    let resultPrefix =''

     for(let j=0; j< firstWord.length; j++){

        let currentLetter = firstWord[j];
          for( let i= 0; i< strs.length; i++){
         let otherWord = strs[i]

         if (j >= otherWord.length || otherWord[j] !== currentLetter) {
                return resultPrefix;
            
            }
        }
        resultPrefix += currentLetter;
        }
        return resultPrefix
    }


    


console.log(longestCommonPrefix(["flower","flow","flight"]))




