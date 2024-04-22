//Keyword function name
function sayMyName(){
    console.log("V")
    console.log("I")
    console.log("S")    //DEFINATION
    console.log("H")
    console.log("A")
    console.log("L")
}

/*sayMyName----->refrence
sayMyName()->execution*/

// sayMyName()

/*function addTwoNumbers(num1, num2){   //defination ke andar parameters hote hai
    console.log(num1 + num2 );
}

const result = addTwoNumbers(2,1)  //passing arguments in function calling
console.log("Result: ", result);*/

function addTwoNumbers(num1, num2){   //defination ke andar parameters hote hai
    // let result = num1 + num2;
    // return result

    return num1 + num2
}                     //function return karne ke baad kuch print nahi karta

const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result);

function loginUserMsg(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Vishal"))
console.log(loginUserMsg())
// console.log(loginUserMsg())   -->undefined

/*Ham isme default value bhi dal denge aur agar argument pass karenge to value overwrite ho jayegi*/ 

console.log("Shopping cart problem types")

function calculateCartPrice(...num1){    //yahi rest operator hai yahi spread operator hai use case par depend karta hai
    return num1
}

console.log(calculateCartPrice(200, 400, 600))   //sab array ki format me aa rahe hai

const user = {
    username: "Vishal",
    price: "199"
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username}, and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Vishal",
    price: "399"
})

/*ISke andar array bhi pass kar sakte hai*/

const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 100, 600]));