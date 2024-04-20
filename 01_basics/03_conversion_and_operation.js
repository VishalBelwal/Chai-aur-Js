let score = "33abc"

console.log(score);
console.log(typeof score);

let valueInNumber = Number(score) //ab ye jo score hai wo number ki form me print hokar aayega

console.log(valueInNumber);
console.log(typeof valueInNumber);

//agar null hota to 0 output aayega and undefined hoga to wapas se nan aayega
/*
"33" => 33
"33abc" => NaN
true => 1 and false => 0
*/

let isLoggedIn = 1  

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"vishal" => true
*/


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);