/*
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)
*/

console.log("2" > 1); //javascript in dono ko automatically number me conert kar de raha hai
console.log("02" > 1); 

//but kabhi labhi predictable result nahi milta

console.log(null > 0); //comparison convert null to a number so it is zero
console.log(null == 0);  
//isme aisa nahi hota
console.log(null >= 0); 

//agar in sabko undefined ke sath bhi karenge to value false hi milegi

console.log("2" === 2)  //yha par value automatcally number me convert nahi ho rahii


// ****************************************************
/*Memory 2 type ki hoti hai stack and heap
stack was used in primitive datatypes => (ye original value ko change nahi karta)iska matlab ye hai ki jo bhi hamne variable declare kara uska ek copy milti hai (ek ke upar ek value store and change hoti rheti hai)and
heap was used in non primitive datatypes => iska matlab ye hai ki jo bhi ham change karenge wo original value me change hoga
*/

let myInstaName = "_vishall.27_"

let anotherName = myInstaName
anotherName = "chaiaurcode"
console.log(myInstaName);
console.log(anotherName);

let userOne = {
    email : "vb@gmail.com",
    upiId : "321654@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

//dono ke andar value same ayegi
console.log(userOne.email);
console.log(userTwo.email);