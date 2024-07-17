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
