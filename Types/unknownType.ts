// It is the type-safe alternative to any.

let value: unknown;

value = 100
value = "HelloWorld"

//But this same thing can be done using "any" also

let value2: any = "hello";

//If value is any, typeScript stops checking.That means Compile time errors does not come,but
// but run time errors which comes during execution of the js code will still come

value2.toLowerCase()
// value2.foo.bar.baz();  //Gives error during compile time
// value2()


// console.log(value.toUpperCase()) //Property 'toUpperCase' does not exist on type 'unknown'.
//Before using it, there must be narrowing of unknown

if(typeof value === "string")
{
   console.log(value.toUpperCase()) //Inside the if block, TypeScript knows: value: string
}

//One More Way to use is,Type Assertion

console.log((value as string).toUpperCase())
