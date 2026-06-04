type Mapish = {
    [s: string]: boolean
}

let obj2: Mapish ={
    "Harry Potter": true,
    "Squid Games": false,
    "Train to Bhuasan": true,
    222: false
}

//Note: type obj2 = string | number;

/*
Because in JavaScript, object keys are always stored as strings.

For example:

const obj = {};

obj[0] = "hello";

JavaScript internally converts it to:

obj["0"] = "hello";

These are the same:

obj[0]
obj["0"] 
*/
console.log(obj2)


//VERY IMP POINT of unknown used as a type in the Arrayish type
type Arrayish = {
    [n: number]: unknown
}

let obj1: Arrayish = {}

obj1[10] = "anyvalue"
obj1[90] = true
obj1[100] = 900

console.log(obj1)
// console.log(obj1[1].toLowerCase()) //Error: Property 'toUpperCase' does not exist on type 'unknown'.

//These assignments are perfectly valid because unknown accepts values of any type.The issue comes when you read a value back: