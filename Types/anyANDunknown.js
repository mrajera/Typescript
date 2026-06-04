//Using any v/s Using unknown
var v1 = { a: 10, b: 20 };
console.log(v1.a); //In case of any, typescript does not enforce any type checking rules
// console.log(v1.a.toLowerCase()) //This is also compiled successfully -> No Typescript interruption.Fails Execution Obviously
var v2 = { a: 10, b: 90 };
// console.log(v2.a) //In case of unknown, typescript does not allow to access a unknown type variable
if (v2 && typeof v2 === "object") {
    console.log('Type of v2', typeof v2);
    // console.log(v2.a) //Cannot even do this because there is no defined type of v2 
}
//2) Cannot assign an unkown type variable to specific type variable
var b1 = 100;
var b2 = 200;
var b3 = b1;
console.log(b1, b2, b3);
var b4 = b2;
var b5 = b2;
var b6 = b2;
console.log(b1, b2, b3, b4, b5, b6);
//Here is the actual difference
var b7 = b1; //Allowed
var b8 = b2; //Not Allowed
