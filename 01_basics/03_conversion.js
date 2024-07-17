let temp = undefined

console.log(typeof temp);
// console.log(typeof (temp)); // also works

let convertToNum = Number(temp) 

console.log(typeof convertToNum)
console.log(convertToNum);

// "33" -> 33
// "33abc" -> NaN
// bool -> 1/0 
// null -> 0
// undefined -> NaN
// NOTE : typeof = number for all // Be careful

let x = 1

let toBoolean = Boolean(x) 
console.log(toBoolean);

// 1 -> true
// 0 -> false
// "" -> false
// "hsfkdfh" -> true


// ****Operations*****

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //Power 2^3
// console.log(3/2)
// console.log(3%2) // Modulo

let str1 = "Punit"
let str2 = " Sukhani"

console.log(str1+str2)

console.log("1" + 2); //12
console.log(1 + "2"); //12 
console.log("1" + 2 + 2); //122 
console.log(1 + 2 + "2"); //32