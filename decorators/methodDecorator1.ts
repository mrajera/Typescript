//A method decorator is a function that runs when a class is defined and receives information about a method.

//Not much difference between decorator function and a decorator factory
function enumerable(value: boolean) {
console.log("Inside eumerable")
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Inside enumerable decorator")
    console.log("target", target, typeof target) //target is the actualFunction
    console.log(target === Greeter.prototype)
    console.log(Greeter.prototype)
    console.log("propertyKey",propertyKey) //property is the name of the function
    console.log("descriptor", descriptor)
    descriptor.enumerable = value;
  };
}

//using decorator factory(decorator) on a method in the class
class Greeter{
    greeting: string
    constructor(message: string){
        this.greeting = message
    }

    @enumerable(false)
    greet(){
        // console.log(`Hello, ${greeting}`)
        return `Hello, ${this.greeting}`
    }
}


console.log(Object.getOwnPropertyDescriptor(
  Greeter.prototype,
  "greet"
))

console.log(
    Object.getOwnPropertyNames(Greeter.prototype)
);