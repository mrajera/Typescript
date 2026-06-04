// 1) Argument types 2) Return type

function f1(a,b){
    console.log('a type is ', typeof a)
    console.log('b type is ', typeof b)
}

f1(3,4)
f1(2, "hello world")
f1({a:1}, 8)



/*Gives Error 

developer@developer:~/Typescript$ tsc functionType.ts
functionType.ts:16:5 - error TS2322: Type 'string' is not assignable to type 'number'.

16     return "Hello World"
       ~~~~~~~~~~~~~~~~~~~~


Found 1 error in functionType.ts:16
*/

// function f2(): number{
//     return "Hello World"
// }

function f2(): string{
    return "Hello World"
}

console.log(f2())


