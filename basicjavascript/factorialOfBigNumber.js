


var factorialOfBigNumber = function(num ) {
   

let result = 1
for( let i=1; i <= num ; i++){
 result = result * i
}

return result

}
console.log(factorialOfBigNumber(100))


var factorialOfBigNumberUsingBigInt = function(num1){
    let result1 = 1n
   for( let i=1n; i <= BigInt(num1) ; i++){
 result1 = result1 * i
}

return result1

}
console.log(factorialOfBigNumberUsingBigInt(100))

//Standard Number (9.33262154439441e+157)Standard numbers in JavaScript are stored as 64-bit floating-point values (IEEE 754).
// They can only accurately represent integers up to $2^{53} - 1$ (9,007,199,254,740,991).Once a calculation exceeds that limit (which happens very quickly around $18!$), 
// JavaScript starts rounding off lower digits and losing precision.Past $100!$, it drops all lower precision entirely and formats the number using scientific exponential notation (e+157), which is an approximation, not the exact number.
// BigInt (93326215443944152681...0000n)BigInt allows arbitrary-precision integers, meaning it grows dynamically in memory to hold every single exact digit without rounding off or losing precision.
// The n at the end of 933262154...0000n indicates it is an exact BigInt literal.

