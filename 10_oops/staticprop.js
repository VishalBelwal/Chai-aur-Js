class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`username: ${this.username}`);
  }

  static createId(){            //kisi ek particular ko functionality na dene ke liye use hota hai
    //static hame kabhi bhi kuch bhi access nahi karne deta
    return `${(Math.floor(Math.random() * 10))}`
  }
}

const vishal = new User("vishal")
// console.log(vishal.createId());

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());

