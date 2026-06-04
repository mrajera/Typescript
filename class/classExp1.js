"use strict";
/*
--strictPropertyInitialization
The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.

class BadGreeter {
  name: string;
Property 'name' has no initializer and is not definitely assigned in the constructor.
}
*/
// class Point{
//     x: number
//     y: number
// }
//Initialized the variables outside constructor
class Point {
    x = 0;
    y = 0;
}
const pt = new Point();
console.log(`${pt.x}`, `${pt.y}`);
//Constructor call hoga jab instance create krenge
class Point2 {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) {
        this.x = 10;
        this.y = 10;
    }
}
const p2 = new Point2();
console.log(typeof p2);
console.log(`${p2.x}`, `${p2.y}`);
