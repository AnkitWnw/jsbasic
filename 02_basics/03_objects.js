// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ankit",
    "full name": "Ankit Ranjan",
    mySym: "mykey1",
    age: 27,
    location: "Jaipur",
    email: "ankit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)

// console.log(JsUser["email"])

// console.log(JsUser["full name"])

// console.log(JsUser.mySym)

JsUser.email = "ankit@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "ankit@google.com"

console.log(JsUser)