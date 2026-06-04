function greeter(f1) {
    console.log("Inside greeter");
    f1(8);
}
function squareNumber(a) {
    return a * a;
}
greeter(squareNumber);
