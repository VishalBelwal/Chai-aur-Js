/*call hamara currenct execution context kisi aur function ko pass kar deta hai ye technically sahi hai but niche diye hue method se samjhayenge to zyada aacha rahega*/


function setUserName(username){
  this.username = username
  console.log(("Called"));
}

function createuser(username, email, password){
  /*setUserName(username)   //yaha par ye actually me call ho hi nahi raha,hamne sirf uska refrence diya hai call nahi hua, ab ye call bhi ho raha hai aur iska execution context bhi hai*/
  
  setUserName.call(this, username)    //refrence hold karne ke liye call function use kiya jata hai aur ab yaha par hame execution context6 bhi dena hoga

  this.email = email,
  this.password = password
}

const chai = new createuser("Chai", "Chai@ggl.com", "123")
console.log(chai);