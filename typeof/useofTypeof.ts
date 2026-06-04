//typeof work differently in the ts and js file 

console.log(typeof "Hello World") 

const user = {
    "name": "Harry",
    "email": "harry@gmail.com"
}

// Suppose you want a type matching this object.

type userType = typeof user

