

var printSecondLargestNumberInArray = function (nums){

    
        let largestNumber = Number.MIN_SAFE_INTEGER
        let secondlargestNumber = Number.MIN_SAFE_INTEGER


    for(let  i =0; i<= nums.length-1; i++ ){
        let current = nums[i]
        if(current > largestNumber){
            secondlargestNumber = largestNumber
            largestNumber = current
        }
   
    else if (current > secondlargestNumber && current != largestNumber){

        secondlargestNumber = current

    }


}
return secondlargestNumber

}

console.log('Print Second Largest Number In Array:',printSecondLargestNumberInArray([1,3,2,7,5]))