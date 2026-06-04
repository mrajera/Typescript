interface objInterface {
    x: number,
    y: number
}

function f1(pt: objInterface){
    console.log(typeof pt)
    console.log(pt.x, pt.y)
}

f1({x: 9, y: 10})

// f1("hello World") 
// Error: Argument of type 'string' is not assignable to parameter of type 'objInterface'.


type objType = {
    x: number,
    y: number
}

function f2(pt: objType){
    console.log(typeof pt)
    console.log(pt.x, pt.y)
}


f2({x: 9, y: 10})

// f2("hello World")
//Error: Argument of type 'string' is not assignable to parameter of type 'objType'

//Both are still treated as object 

// developer@developer:~/Typescript$ node interface.js
// object
// 9 10
// object
// 9 10

