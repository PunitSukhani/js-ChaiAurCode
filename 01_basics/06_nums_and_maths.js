const num = Number.MAX_SAFE_INTEGER

console.log(num)

const temp = 11.236

console.log(temp.toFixed(2))

console.log(Math.abs(-4))
console.log(Math.ceil(8.4))
console.log(Math.round(2.5))

console.log(Math.random()) // [0,1) values (NOTE - 0 inclusive , 1 exclusive)

console.log(Math.random()*10) // To get [0,10)

console.log(Math.floor(Math.random()*11)) // To get [0,10]

console.log(Math.floor((Math.random()*10) + 1)) // To get [1,10]

let max = 20
let min = 10

//to get [min-max]
console.log(Math.floor( Math.random() * (max-min+1) ) + min)
