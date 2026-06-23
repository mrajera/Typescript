
let b = 10  //changing the variable to a Here 

b= b+ 20 // Will suggest to change the variable to a here as well

function f10(a: number,b: number){ //Will not suggest to change the variable to a here as it is a parameter and not a variable although it has the same name as the variable a in the outer scope

    return a+b
}

console.log(b) //Will suggest to change the variable to a here as well