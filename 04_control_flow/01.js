//if else

//switch
// switch (key) {
//     case value:
//         //code
//         break;
    
//     case value2:
//         //code
//         break;
    
//     default:
//         break;
// }

//Truthy , Falsy

let username = "Punit"

if(-5){
    console.log("yes")
}
else{
    console.log("no");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//true, "non-empty string", [], {}, function(){},any non zero number

//Nullish coalescing operator ?? - null , undefined

let val1 ;
val2 = val1?? null ?? 10 // if first value if null or undefined...takes nect value

console.log(val2);

//ternary operator
//condition ? true : false

10>20 ? console.log("Ok") : console.log("NotOk");