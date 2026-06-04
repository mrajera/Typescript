//A name for any type 

//stringType, numberType, unionType, and objType exist only during compilation; typeof works on runtime JavaScript values, not TypeScript types.

type objType = { 
    x: number,
    y: number
}


type unionType = number | string

type stringType = string

type numberType = number


function f10(a: objType, b: unionType, c: stringType, d: numberType){
     console.log('a = ', typeof a)
     console.log('b = ', typeof b)
     console.log('c = ', typeof c)
     console.log('d = ', typeof d)
}


f10({ x: 10, y: 90}, 80, "90", 100)