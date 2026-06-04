"use strict";
//A method decorator is a function that runs when a class is defined and receives information about a method.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Not much difference between decorator function and a decorator factory
function enumerable(value) {
    console.log("Inside eumerable");
    return function (target, propertyKey, descriptor) {
        console.log("Inside enumerable decorator");
        console.log("target", target, typeof target);
        console.log(target === Greeter.prototype);
        console.log(Greeter.prototype);
        console.log("propertyKey", propertyKey);
        console.log("descriptor", descriptor);
        descriptor.enumerable = value;
    };
}
//using decorator factory(decorator) on a method in the class
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        // console.log(`Hello, ${greeting}`)
        return `Hello, ${this.greeting}`;
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
console.log(Object.getOwnPropertyDescriptor(Greeter.prototype, "greet"));
console.log(Object.getOwnPropertyNames(Greeter.prototype));
