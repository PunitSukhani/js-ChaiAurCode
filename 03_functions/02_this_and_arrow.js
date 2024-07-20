const user = {
    username: "Punit",
    price: 999,

    greetings: function(){
        console.log(`${this.username}, welcome`) // this is used to refer to current context
        console.log(this)
    }
}

user.greetings()

user.username = "Sam"
user.greetings()

console.log(this) //broswer output - window
//node.js par {} 
//global object 

/*Arror Function*/

const addTwo = (num1,num2) => (num1+num2) //implicit return
console.log(addTwo(3,5))

const multTwo = (num1,num2) => { //explicit return
    return num1*num2
}
console.log(multTwo(2,3))

//IIFE