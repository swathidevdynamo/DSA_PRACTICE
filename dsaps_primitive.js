/** ToPrimitive abstract operation examples */

/** Coersion in substraction operation */

let obj = {}
console.log('obj --------->>>>>>...', 10 - obj) // result is NaN - where obj valueof will return object itself

let obj1 = { a: 10, b: 20 };
console.log('obj1------------>>>>>>>>>>>>', 40 - obj1) /**
result is NaN - what ever the obj1 assigned with key value pairs, when comes to substraction
it depends on valueOf and toString
*/

let obj2 = {
    a: 10, valueOf() {
        return 10;
    }
}
console.log("obj2----->>>>>>>>>>>>", 100 - obj2)
/**
result is 90 - where we are taking obj2 valueOf to substract from 100
*/

let obj3 = {
    a: 10, valueOf() {
        return {}
    }
}
console.log("obj3----->>>>>>>>>>>>", 100 - obj3) // result is NaN

let obj4 = {
    a: 100, toString() {
        return `Let's learn JS`
    }
}

console.log("obj4 operation------------>>>>>>>>", 1000 - obj4) // result is NaN

let obj5 = {
    a: 1, toString() {
        return 30
    }
}

console.log("obj5 operation----------->>>>>>>>>>>>>", 100 - obj5) // result is 70

let obj6 = {
    a: 1, toString() {
        return {}
    }
}

//console.log("obj5 operation----------->>>>>>>>>>>>>", 100 - obj6) // result is TypeError



/** Coersion in addition */

let add = {
    valueof() {
        `Let's learn JS`
    }
}
console.log('20' + add) // result is 20[object Object]
console.log(200 + add) // result is 200[object Object]

/** uniary operation */
console.log("result------>>>>>>>>>>>>>", +"10") //it converts to number