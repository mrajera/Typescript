// function is basically an object 
//So, it also can have a property

/*
Problem

Function type expressions can only describe:

(number) => boolean

They cannot describe:
a callable thing
with properties

*/

/*
An object that:
1. has a property called description
2. can be called like a function
*/


type funcWithProperty = {
    description: string,
    (s:number): number 
}

//            Object
//               │
//      ┌────────┴────────┐
//      │                 │
//  description      callable


function funcWithProperty2(a: number){
    return a*a
}

funcWithProperty2.description = "This is square"

function doSomething(
  fn: funcWithProperty
) {
  console.log(
    fn.description +
    " returned " +
    fn(6)
  );
}

doSomething(funcWithProperty2)