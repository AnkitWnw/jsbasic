// Types Of Primitive

// 7 types

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

//console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail, (id === anotherId)])

// Types Of Refrence (Non Primitive)

// 1. Array
// 2. Objects
// 3. Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Ankit",
    age: 27,
}

const myFunction = function() {
    console.log("Hello Heros");
}

//console.log(typeof anotherId)

/*
Stack (Primitive)

Heap (Non-Primitive)
*/ 
    
let myName = "Ankit"

let anotherName = myName

anotherName = "Amit"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "ankit@gmail.com",
    upi: "ankit@ybl"
}

let userTwo = userOne

userTwo.email = "amit@google.com"
userTwo.upi = "amit@ybl"

console.log(userOne.upi)
console.log(userTwo.email)


