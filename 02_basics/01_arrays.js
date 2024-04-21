/*ARRAY*/

const myArr = [0, 1, 2, 3, 4, 5]

const myheros = ["batman", "SuperMan"]

const myarr2 = new Array(3245, 435, 67)

// console.log(myArr[4]);

/*Array Methods*/

// myArr.push(6)  //adds value in any array
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


/*splice me original array manipulate ho jat hai utna part original array me se hat jata hai*/