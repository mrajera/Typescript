function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
}
printAll("hello World");
printAll(["hello", 'world']);
//The cure to this is below
// printAll(null) //TypeError: Cannot read properties of null (reading 'length')
/*
Special typeof Values

JavaScript's typeof can return only:

"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
*/
/*
Weird JavaScript Behavior: typeof null

Consider:

console.log(typeof null);

Output:

"object"

Yes, really.

This is a historical JavaScript bug that can never be fixed.
*/
/*
Truthiness Narrowing

JavaScript treats some values as false:

false
0
NaN
""
0n
null
undefined

Everything else is truthy.
*/
//hence truthiness checking is required expicitly
function printAllFixed(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
            var s = strs_2[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAllFixed("hello world");
printAllFixed(["hello", "world"]);
printAllFixed(null);
