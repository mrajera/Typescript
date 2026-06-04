function f1(pt) {
    console.log(typeof pt);
    console.log(pt.x, pt.y);
}
f1({ x: 9, y: 10 });
function f2(pt) {
    console.log(typeof pt);
    console.log(pt.x, pt.y);
}
f2({ x: 9, y: 10 });
// f2("hello World")
//Error: Argument of type 'string' is not assignable to parameter of type 'objType'
