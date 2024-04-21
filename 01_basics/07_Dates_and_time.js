//dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

/*let myCreatedDate = new Date(2023, 5, 23)  //month js ke andar 0 se start hote hai*/
// let myCreatedDate = new Date("2024-04-21")
let myCreatedDate = new Date("04-21-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   //milisecond e aayega output

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));


let newDate = new Date();


/*Used for Costumisation*/ 
newDate.toLocaleString('default',{
    weekday: "long"
})