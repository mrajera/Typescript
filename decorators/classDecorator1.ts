//Decorator -> Expression @decorator name

//A class decorator is just a function that receives the class constructor 
// and gets a chance to inspect, modify, or replace the class before it is used.

// class BugReport {
//     title: string;

//     constructor(t: string) {
//         this.title = t;
//     }
// }

/*

Treat a class as a function
function bugReport(t: string)
{
  this.title = t
}
*/

//One more thing to keep in mind when using class constructor

/*
EX:

@sealed
class BugReport{}

Think this concept in the easiest way as
sealed(BugReport)
*/


//Defining/Declaring/Making a decorator
//The most important thing is what is passed to the sealed decorator

function sealed(constructor: Function){
    console.log('Inside sealed decorator', typeof constructor),  //function -> WHY? => In JavaScript, classes are implemented using constructor functions.
    console.log('Inside sealed decorator', constructor)  // [class BugReport] => which is the class object itself.
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
class BugReport {
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}


