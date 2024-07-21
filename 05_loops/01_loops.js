// for(let i=0 ; i<=10 ; i++)
// {
//     console.log(i)
// }

//break , continue

//while,do while loops

//for of loop
// for (const iterator of object) {
    
// }

let arr= [1,2,3,4]
let sum = 0 
for (const num of arr) {
    sum += num 
}
console.log(sum)

//maps
const map = new Map()

map.set("IN",1)
map.set("US",2)
map.set("PK",3)
map.set("PK",4) // 1 value per key only 
map.set("CA",4)

console.log(map)

//for of loop doesnt work on objects