function paddingLeft(padding: number|string, input: string){
    console.log(typeof padding)
    if(typeof padding === "number"){
        console.log(typeof padding)
        const emptyString = " "
        // return emptyString.repeat(padding) + input //this function is not available in the default ES version which ts uses to convert the ts to js code
        // hence one option is to use tsc --lib es2015 narrowing1.ts
        //  But this again gives error for not having console
        return input
    }
    else{
        console.log(typeof padding)
        return padding + input
    }
}

paddingLeft(3, "hello")
paddingLeft("   ", "hello")




/*
Inside the if block:
padding becomes: number
Inside the else branch:
padding becomes: string
This process is called narrowing. 
*/

/*
Type Guards

A type guard is any expression that helps TypeScript determine a more specific type.

Examples:

typeof x === "string"
x !== null
"swim" in animal
x instanceof Date

All of these are type guards. 
*/