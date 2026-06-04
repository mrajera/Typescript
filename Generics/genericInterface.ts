//generic interface 
//generic function

function identity<Type>(arg: Type): Type {
  console.log("Inside identity generic function")
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type;// a variable that accepts a generic function Like let x: string


//inline definition
let myIdentity2: {
    <Type>(arg: Type): Type;
} //An object type containing a callable function signature

//reusable -> interface


//Not a generic interface
interface myIdentityInterface1{
    <Type>(arg: Type): Type;
}

let myIdentity3: myIdentityInterface1 = identity

console.log(myIdentity3(100)) //Can call multiple times, with number 
console.log(myIdentity3("Hello World")) // with string

//Moving the generic parameter to the interface

interface myIdentityInterface2<Type>{
    (a: Type): Type
}

let myIdentity4: myIdentityInterface2<number> = identity; //Can only assign once, hence we need to give a specific type through the interface itself

// myIdentity4("Hello World")//Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(myIdentity4(100))

/*Type Alias Version Most developers would probably write:

type IdentityFn = <T>(arg: T) => T;

const myIdentity: IdentityFn = identity;

This is concise and easy to read.

Interface Version
interface IdentityFn {
    <T>(arg: T): T;
}

const myIdentity: IdentityFn = identity;

*/