//for each loop
// array.forEach( (element) => {
    
// });

const arr = [10,20,30]

arr.forEach( function (num){ //remove function name , rest like a function
    console.log(num)
})

// //Using arrow function
// arr.forEach( num => {
//     console.log(num);
// })

// function print(item){
//   console.log(item)
// }

// arr.forEach(print) //kisi aur function ka refrence bhi pass kar skte hai 

arr.forEach( (item,index,arr) => {
   console.log(item,index,arr)
})