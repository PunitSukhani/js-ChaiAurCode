//filter

const myNums = [1,2,3,4,5,6]

const newNums = myNums.filter((item) => {
    return item>4
})

//other method
// const newNums = myNums.filter((item) => item>4 )//implicit return 

console.log(newNums)