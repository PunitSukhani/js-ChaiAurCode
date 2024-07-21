//for in loop
// for (const key in object) {
//      
//     }
// }

const myObject = {
    cpp: "c++",
    py: "py",
    js: "javascript"
} 

for(const key in myObject){
    console.log(`${key} -> ${myObject[key]}`)
}

const arr = [10,20,30]

for(const key in arr){
    console.log(key) //for in loop keys return karta hai 
    console.log(arr[key])
}