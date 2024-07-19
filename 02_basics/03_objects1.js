// let JsUser = new Object() // Singleton object

const mySym = Symbol("key")

//object literal , non-singleton object
let JsUser = {
    name: "Punit",
    age: 19,
    location: "Hisar",
    email: "Punit@gmail.com",
    active: true,
    [mySym]: "mykey1", //symbol ke liye syntax
    // greeting: function(){ //function
    //     console.log(`Hello User ${this.name}`)
    // }
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //another way to access

// console.log(JsUser[mySym]) //symbol ke liye proper access

JsUser.email = "punit@yahoo.com"

// Object.freeze(JsUser) // to prevent furthur change

// console.log(JsUser)

JsUser.greeting = function(){ 
    console.log(`Hello User ${this.name}`)
}

// console.log(JsUser.greeting())

console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))