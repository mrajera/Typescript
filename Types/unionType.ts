/*
A union type is a type formed from two or more other types, representing values that may be any one of those types. 
*/

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101); //pass a number
// OK
printId("202"); //pass a string
// Error
// printId({ myID: 22342 }); //but cannot pass a object


