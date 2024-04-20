const name = "Vishal"
const repoCount = 4

//string interpolation--->placeholders banayenge unke waha par jo bhi value hai unhe directly inject kar denge
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//different method of defining string

const gameName = new String("Vishal-vb-com")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());  //but isne hamari original value ko change nahi kiya hai
console.log(gameName.charAt(5));   //kis index par konsa chaacter present hai
console.log(gameName.indexOf('b'));   //konsa character konse positon par hai

const newString = gameName.substring(0, 5)
console.log(newString);
//isme negative pass karne par ye use follow nahi karta 0 se hi intialise karta hai

const anotherString = gameName.slice(0, 4)
console.log(anotherString);
//isme negative value se start kar deta hai

const newStringOne = "    vishal  "
console.log(newStringOne);
console.log(newStringOne.trim());  //faltu ki value ko hata deta hai onlu works on white space characters

const url = "https://google.com/google%2024ggl"

console.log(url.replace('%20', ' '))
console.log(url.includes('google'));

console.log(gameName.split('-'));  //in this we needs a seprator and a limit, ye hame array ki form me value return karega