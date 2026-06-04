// function is basically an object 
//So, it also can have a property
//            Object
//               │
//      ┌────────┴────────┐
//      │                 │
//  description      callable
function funcWithProperty2(a) {
    return a * a;
}
funcWithProperty2.description = "This is square";
function doSomething(fn) {
    console.log(fn.description +
        " returned " +
        fn(6));
}
doSomething(funcWithProperty2);
