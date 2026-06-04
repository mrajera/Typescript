type f1TA = (s: number) => number

function greeter(f1: f1TA){
    console.log("Inside greeter")
    f1(8);
}

function squareNumber(a: number) {
    return a*a
}

greeter(squareNumber)

/*
This avoids repeating of the function signature everywhere -> Use of type Alias 
*/