function printCoord(pt) {
    //can i access a propery on pt which does not exist
    console.log(pt.z);
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
