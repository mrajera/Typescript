//string, number, boolean

const s1: string = "Hello, World"
const n1: number = 3
const b1: boolean = true

// Arrays

//1st way
const a1: number[] = [1,2,3]
const a2: string[] = ["Hello", "World"]

//2nd way
const a3: Array<number> = [4,5,6]
const a4: Array<string> = ["Hello", "Hi"]


//any
let obj: any = { x: 0 }

obj.foo()
obj()
obj.bar =100;
obj="hello"
const n: number = obj


//function -> functionType.ts
//object 

