// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==   //=== ye type bhi check karta hai

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

//IMPLICIT SCOPE    
// if (balance > 500) console.log("test"),console.log("test2");  //aisa nahi karna hai

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//&&--> and statement true output aane ke liye dono statement true honi chahiye
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}


//||---> pipe sign use to test multiple condition dono me se koi ek true ho to execute kar dega
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//aage jake conditional rendering bhi karenge