type Point = {
  x: number;
  y: number;
};

type P = keyof Point; 

//P is "x" | "y"

//Make a variable with type p
let P100: P;

//So the type of the P100 is P
// it is similar to saying that P100 can take one of the values from P that is either "x" or "y"

//Error
//P100 = "z" // Type '"z"' is not assignable to type 'keyof Point'.

type User = {
  id: number;
  name: string;
  email: string;
};

const actualUser: User = {
    id: 19191,
    name: "harry",
    email: "harry@gmail.com"
}

//a function that returns the values of the respective keys of User
function f1(obj: User, key: keyof User)
{
    return obj[key]
}

//Now all the keys which are actually present in the obj will give a value for that key
//But, any key not present in the User can cannot be passed as the second argument to this function
//Preventing the error

console.log(f1(actualUser, "id"))
console.log(f1(actualUser, "email")) 

//Compile time error 
// console.log(f1(actualUser, "age")) Argument of type '"age"' is not assignable to parameter of type 'keyof Us
