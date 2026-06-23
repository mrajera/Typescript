"use strict";
function printCoord(pt) {
    //can i access a propery on pt which does not exist
    //   console.log(pt.z) //Allowed in js /Not Allowed in ts
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7, z: 9 });
