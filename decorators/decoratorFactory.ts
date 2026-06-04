//decorator factory
//To pass arguments inside decorator, then the decorator will return the acual decorator function



//@color -> decorator function -> because a decorator must ultimately be a function that receives the target.
//@color(argument) -> decorator factory -> pass arguments to a decorator.



//decorator factory
function color(value: string, value1: string) {
    console.log("Factory executed");

    return function (target: Function) {
        console.log("Decorator executed");
        console.log(value);
        console.log(value1)
    };
}


@color("red", "blue")
class Car{}

//So,what actually is the decorator called ove class declaration
/*
const decorator = color("red");

decorator(Car);
*/

