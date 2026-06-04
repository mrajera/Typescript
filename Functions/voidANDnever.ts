//void -> When function actually executes normally, but does not return anything
//never -> When function does not execute normally, that is never returns

function f1(): void{
    console.log("Inside f1")
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


function f4(): never{
    throw new Error("Inside f4")
}

let op4 = f4()

//Any variable with type "never" can not be assigned any value
// op4 = "string"
// op4 = 100

//never can be assigned to anthing -> This is allowed because a never value can never actually occur.
//op4 me kabhi assignment hoga he nhi, because the function actually throws, basically stops the execution
// let s: string = op4
// let n: number = op4
// let b: boolean = op4

// console.log(s)
// console.log(n)
// console.log(b)

//This is also valid to return never in a return type of function that never returns due to infintite loop

function f5(): never{
    while(true){}
}


/*
Variable 'n100' is used before being assigned.
let n100:never;

let s: string = n100
let n: number = op4
let b: boolean = op4
*/

/*
Why is never assignable to everything?

Think of never as:

The set of no possible values

A useful mathematical analogy:

string  = {"a", "b", "c", ...}
number  = {1, 2, 3, ...}
never   = {}

The empty set is a subset of every set.

That's why TypeScript allows:

never -> string
never -> number
never -> boolean
*/
