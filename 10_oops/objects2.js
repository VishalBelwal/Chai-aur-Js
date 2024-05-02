//Prototype
/*array bhi actually ek object hai aur wo bhi at the endsimilar;y null ke pass jaaq raha hai
aise hi same condition apply with stringsandyebhi ke sakte hai ki js me saari cheez ek object hi hai */

function multiplyby5(num){
  this.num = num
  return num * 5;
}
multiplyby5.power = 2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

/*iska matlab ye hai ki function function bhi hai aur object bhi hai*/

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai", 25)
const tea = createUser("tea", 125)

chai.printMe();


/*check the write down on github in object.js file*/