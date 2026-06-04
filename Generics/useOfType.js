/*
We will use a type variable, a special kind of variable that works on types rather than values.

function identity<Type>(arg: Type): Type {
  return arg;
}
*/
function identity(arg) {
    return arg;
}
var result = identity("hello");
console.log(result.toLowerCase());
var result2 = identity(900);
//any did not allow the compiler to throw error in this line in the previous example
//console.log(result2.toUpperCase()) //Error During Compilation. No Runtime Risk of using incorrect methods
//error TS2339: Property 'toUpperCase' does not exist on type 'number'.17 console.log(result2.toUpperCase())
