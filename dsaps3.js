/**
 * problem solving on triangle using if else
 * Given 3 integers a,b,c check if we can form triangle with size of triangle having length a, b and c
 */

let a = 10;
let b = 12;
let c = 9;

if (a + b > c && a + c > b && b + c > a) {
    console.log("We can form a triangle")
} else {
    console.log("We can't form a triangle")
}

