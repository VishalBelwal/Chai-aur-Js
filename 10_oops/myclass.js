/*class user {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }                      //jaise hi class se ek object initialise hoga yanoi ki wo new keyword wo jaise hi kaam me ayega waise hi constructor apne aap call ho jata hai

  //yaha par ab ye method me convert ho gaya
  encryptPassword(){
    return `${this.password}abc`
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`
  }

}

const chai = new user("Chai", "chai@ggl.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());*/



//Behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

User.prototype.changeusername = function(){
  return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@ggl.com", "1234")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());