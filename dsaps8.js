/** Coersion is nothing but type casting which follows abstract operations */

console.log(2-7) // -5 - where substraction converts lref and rref to numbers 
console.log("value -------->>>>>>>", 1 - "0xa") // -9 - where "0xa" decimal value is 10 
console.log(undefined - 10); // NaN - where undefined converts to NaN
console.log(null - 10); // -10 - where null converts to 0
