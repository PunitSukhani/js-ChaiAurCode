function add(a,b){
    return a+b 
}

// console.log(add(2,3))

function calculateCartPrice(val1,...num){ //rest operator
    return num //return extra values array 
}

console.log(calculateCartPrice(200,300,500,100))

const user = {
    username : "Punit",
    price : 99
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
