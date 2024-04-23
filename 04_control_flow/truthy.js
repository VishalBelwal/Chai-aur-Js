
/*Truthy and Falsy value*/

const userEmail = []

if(userEmail){
    console.log("Got User Email")
}
else{
    console.log("Don't have user email")
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}(empty object), function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

//for objects
//detecting weather the object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){     //ye wali cheez hame ek array return karegi
    console.log("OBject is Empty");
}

/*
Some true condition
    //false == 0------>true
    //false == ''----->true
    //0 == ''----->true
*/

// Nullish Coalescing Operator (??): isme sab kuch null and undefined par hi defined hoga
//ye operator agar null ayaa hai to uske liye saftey check karta hai
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20   //jo bhi first value mil rahi hai wo assign ho jayegi


console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")