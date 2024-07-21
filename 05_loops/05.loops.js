//filter

const myNums = [1,2,3,4,5,6]

// const newNums = myNums.filter((item) => {
//     return item>4
// })

//other method
// const newNums = myNums.filter((item) => item>4 )//implicit return 

// console.log(newNums)

//array.map() , different from Map
//similar to for each loop
// const newNums = myNums.map( (item) => {
//     return item+10
// })
// console.log(newNums);

//chaining of methods
// const newNums = myNums
//                     .map((item) => item*10)
//                     .map((item) => item+1 )
//                     .filter((item) => item>30)

// console.log(newNums);                    


//Reduce
const newNums = myNums.reduce((acc,currval) => {
    console.log(`acc:${acc} curr:${currval}`);
    return acc+currval
} , 10) // , initial value