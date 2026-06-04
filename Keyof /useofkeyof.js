//P is "x" | "y"
//Make a variable with type p
var P100;
var actualUser = {
    id: 19191,
    name: "harry",
    email: "harry@gmail.com"
};
//a function that returns the values of the respective keys of User
function f1(obj, key) {
    return obj[key];
}
//Now all the keys which are actually present in the obj will give a value for that key
//But, any key not present in the User can cannot be passed as the second argument to this function
//Preventing the error
console.log(f1(actualUser, "id"));
console.log(f1(actualUser, "email"));
console.log(f1(actualUser, "age"));
