let marvelHeros = ["Ironman", "Spiderman", "Hulk" ]
let dcHeros = ["Batman", "Superman", "Flash"]

// marvelHeros.push(dcHeros) //Pura array 3rd index par aajyega
// console.log(marvelHeros)
// console.log(marvelHeros[3][0])

let allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

//Better method
let all_new_Heros = [...marvelHeros, ...dcHeros] //spread operator 
console.log(all_new_Heros)

console.log(Array.from("Punit Sukhani")) // converts different array like datatypes to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //converts a set of elements to araay