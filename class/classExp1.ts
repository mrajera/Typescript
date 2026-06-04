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
class Point{
    x = 0;
    y = 0;
}

const pt = new Point()

console.log(`${pt.x}`, `${pt.y}`)


//Constructor call hoga jab instance create krenge
class Point2{
   x: number= 0;
   y: number = 0;

   constructor(x=0, y=0) {
    this.x = 10;
    this.y = 10;
   }
}

const p2 = new Point2()

console.log(typeof p2) //An object
console.log(`${p2.x}`, `${p2.y}`)


//method in calss


//Inside method, the fields of the class need to be accessed only using "this"
class Point3{
    x = 10;
    y= 10;

    scale(n: number): void {
       this.x *=n;
       this.y *= n;
    }
}

//Accesing the fields with using this leads to accessing the value from the enclosing scope

let s1: string = "Harry"
class Point4{
    s: string = "hello"
    s1: number = 10
    
    m(){
      //s = "world" //Cannot find name 's'. Did you mean the instance member 'this.s'? -> s bahr bhi declare nhi hai to khi nhi mila
      this.s = "world"
      //s1 = 100  //Type 'number' is not assignable to type 'string'. Because -> bahr wala s1 access horha hai
      this.s1 = 100
    }
}

// access modifiers > public, private, protected, readonly
//implements
//extends
//static
//function overriding
//static method //static field //No static class
//abstract class, method, field
//this ->>>>>>>>>>>>>>> Need to read it.
