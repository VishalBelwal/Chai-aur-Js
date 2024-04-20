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