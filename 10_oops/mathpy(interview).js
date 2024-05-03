const descripter = Object.getOwnPropertyDescriptor(Math, "PI")    //math me se pi ki value acess kar rahe hai

console.log(descripter);
/*console.log(Math.PI)   //universal constant value change nhi ho sakti and overwrite bhi nahi ho sakti but actualy ho sakti hai*/

/*ham dusri property bhi le sakte hai aur un properties and flags ko change bhi kar sakte hai */

// const myNewobject = object.create(null)

/*object itretable hai ya nhi ye depend karta hai alag alag condition par*/
const chai = {
  name: 'Chai',
  price: '250',
  isavialable: true, 

  orderChai: function(){
    console.log("Chai Nahi bani!!!!");
  }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));   // yaha se hame chai ke andar name prperty ka description milega

/*Object.defineProperty(chai, 'name', {
  writable: false,
  enumerable: false,
  // configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));*/

// console.log(chai);

for(let [key, value] of Object.entries(chai)){
  if (typeof value !== 'function'){
    console.log(`${key} : ${value}`);
  }
  
}