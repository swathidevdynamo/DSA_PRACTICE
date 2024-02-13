/** toString() and valueOf() 
 * examples below
*/


let obj = {}

console.log("toString------->>>>>>>..",obj.toString()) // default value is [object Object]
console.log("type------->>>>>>>..",typeof obj.toString())// type would be string

console.log("valueOf---->>>>>>>>>>>", obj.valueOf()) // default value is same object that is going to return {} 
console.log("type for valueOf------->>>>>>>>>", typeof obj.valueOf()) // type would be object

let obj1 = {
    toString(){
        return `Let's learn Javascript`
    }
}
/** we can override the toString of the object */
console.log("toString ------->>>>>>>>>>>", obj1.toString()) // value would be string

let obj2 = {
    toString(){
        return 10;
    }
}

console.log("toString ----->>>>>>>>>", obj2.toString()) // value would be number

let obj3 = {
    x:10,
    valueOf(){
        return `Let's learn Javascript3`
    }
}

console.log("toValue --------->>>>>>>>>>>>>>>.",obj3.valueOf()) // valueof would be string
console.log("type --------->>>>>>>>>>>>>>>.",typeof obj3.valueOf()) // type would be string as it is returning string

