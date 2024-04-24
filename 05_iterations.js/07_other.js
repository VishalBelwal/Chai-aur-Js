const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//let sab numbers ke andar hame 10 add karna hai

// const newNums = myNums.map( (num) => num + 10 )

//chaining

const newNums = myNums.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num >= 40 )  
//jab bhi chaining hoti hai to uska result agle wale me add hota jata rheta hai

console.log(newNums);