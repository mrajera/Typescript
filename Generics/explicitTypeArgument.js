//Type Argument Inference  OR What Does "Capture the Type" Mean? -> "Type allows us to capture the type the user provides."
function generic1(a) {
    // console.log(Type) Can we not use type other than in the function signature
    return a;
}
generic1("hello world"); //function identity<string>(arg: string): string
generic1(400);
generic1(true);
//Explicit Type Arguments: You can manually specify the type =>
// generic1<number>("Hello World") Not Allowed
generic1(100);
/*
Key Takeaway

The progression is:

// Too specific
function identity(arg: number): number

↓

// Too loose (loses type information)
function identity(arg: any): any

↓

// Generic (flexible + type safe)
function identity<Type>(arg: Type): Type
*/
