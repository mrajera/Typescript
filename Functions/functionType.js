//Function Type Expressions → describe a function.
function greeter(fn) {
    var getValue = fn("hello world");
    console.log(typeof getValue);
    console.log(getValue);
    // fn(900) Argument of type 'number' is not assignable to parameter of type 'string'.
}
function printToConsole(st) {
    console.log(st);
}
function printToConsole2(n) {
    console.log(n);
}
function printToConsole3(st) {
    console.log(st);
    return 90;
}
// greeter(printToConsole)
// greeter(printToConsole2)
// Argument of type '(n: number) => void' is not assignable to parameter of type '(s: string) => void'.
//   Types of parameters 'n' and 's' are incompatible.
//     Type 'string' is not assignable to type 'number'.
greeter(printToConsole3);
/*
greeter wants a function

string
   ↓
 void
*/ 
