"use strict";
//void -> When function actually executes normally, but does not return anything
//never -> When function does not execute normally, that is never returns
function f1() {
    console.log("Inside f1");
}
//If we write a written with no value-> It means f2 eventually returns undefined
//And hence, this is not allowed ->Type 'undefined' is not assignable to type 'never'.
// function f2(): never{
//     return;
// }
//Here, the function actually completes normally and that is not where never should be used
//And hence, this is also not allowd ->A function returning 'never' cannot have a reachable end point.
// function f3(): never{
// }
function f4() {
    throw new Error("Inside f4");
}
let op4 = f4();
//Any variable with type "never" can not be assigned any value
// op4 = "string"
// op4 = 100
//never can be assigned to anthing
let s = op4;
let n = op4;
let b = op4;
console.log(s);
console.log(n);
console.log(b);
