//Identity Function-> Returns the same thing as passed to it
//PART-1
/*
function identity(a){
    return a
}

const c = identity("Hello World")
console.log(c.toLowerCase()) //No error given by tsc but got error on execution of js
console.log(typeof c)

const b = identity(12)
console.log(b.toLowerCase());
              ^
TypeError: b.toLowerCase is not a function
console.log(typeof b)

//Knowing the return type gives us an idea about what functions we can perform on the returned value
*/
//An identity function is a function that returns exactly the same value that it receives, without modifying it.
function identity1(arg) {
    return arg;
}
identity1(10);
function identity2(arg) {
    return arg;
}
identity2("Hello World");
/*
And another for booleans, arrays, objects, etc.This becomes repetitive.
*/
//Use of any to avoid same function definition repitition
function identity3(a) {
    return a;
}
var st1 = identity3("Hello World");
var n100 = identity3(100);
console.log(st1.toLowerCase());
// console.log(n100.toLowerCase()) // No compile time error
console.log(typeof st1);
console.log(typeof n100);
