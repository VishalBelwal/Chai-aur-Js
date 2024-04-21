// const score  = 400
// const balance = new Number(100)
// console.log(balance);

// console.log(typeof balance.toString());

// const otherNumber = 123.34
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


/**************************Maths**************************************/

/*console.log(Math);
console.log(Math.abs(-4)); //absolute value sirf negative positive me convert ho jata hai
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));  //agar thoda sa bhi 4 se jyada hua to top value chose karega
console.log(Math.floor(4.8)); //bottom wali value select karega*/

console.log(Math.random());  //hamesha 0 and 1 ke beech me value return karega
console.log((Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);   //lowest value me round off

//other way
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //2nd bracket me phele range define kari fir 0 ko avoid karne ke liye 1 add kiya and min kitna chahiye is liyte min bhi add kiya
