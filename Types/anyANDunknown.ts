//Using any v/s Using unknown

let v1: any = {a: 10, b:20}
console.log(v1.a) //In case of any, typescript does not enforce any type checking rules
// console.log(v1.a.toLowerCase()) //This is also compiled successfully -> No Typescript interruption.Fails Execution Obviously
let v2: unknown = {a: 10, b: 90}
// console.log(v2.a) //In case of unknown, typescript does not allow to access a unknown type variable

if(v2 && typeof v2 === "object"){
    console.log('Type of v2', typeof v2)
    // console.log(v2.a) //Cannot even do this because there is no defined type of v2 
}


//2) Cannot assign an unkown type variable to specific type variable

let b1: any = 100
let b2: unknown = 200

let b3 = b1
console.log(b1,b2,b3)

let b4: any= b2
let b5: unknown = b2
let b6 = b2
console.log(b1, b2, b3, b4, b5, b6)

//Here is the actual difference

let b7: boolean = b1 //Allowed
let b8: number = b2 //Not Allowed





