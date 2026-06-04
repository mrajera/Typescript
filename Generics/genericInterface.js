//generic interface 
//generic function
function identity(arg) {
    console.log("Inside identity generic function");
    return arg;
}
var myIdentity; // a variable that accepts a generic function Like let x: string
//inline definition
var myIdentity2; //An object type containing a callable function signature
var myIdentity3 = identity;
console.log(myIdentity3(100)); //Can call multiple times, with number 
console.log(myIdentity3("Hello World")); // with string
var myIdentity4 = identity; //Can only assign once, hence we need to give a specific type through the interface itself
// myIdentity4("Hello World")//Argument of type 'string' is not assignable to parameter of type 'number'.
myIdentity4(100);
