var reverseInterger = function (num) {

    let reverseNo = 0;
    num= Number(num)
    while (num > 0){
    let lastDigit = num % 10
    reverseNo = reverseNo * 10 + lastDigit
    num = Math.floor(num/10) 
    }

    return reverseNo;
  

}
console.log(`ReversedNumber are: ${reverseInterger ('123')}` )

var reverseInterger2 = function(numNotReversed){

    let reversedNumber3 = String(numNotReversed).split('').reverse().join('')
      

return parseFloat(reversedNumber3) * Math.sign(numNotReversed)

}
console.log(`ReversedNumber are: ${reverseInterger2 ('214748364')}`)