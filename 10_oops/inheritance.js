class User {
  constructor(username){   //class creating username
    this.username = username
  }

  logMe(){
    console.log(`User Name is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email,password){
    super(username)    //ye super keyword refer karega User ko uske andar jake uski value utha ke layega
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@teacher.com", "123")

chai.addCourse()
chai.logMe()  //iske pas bhi refrence hoga because dono inherit kar rahe hai
const vishal = new User("Vishal")
/*vishal.addCourse() //user ke pas addcourse ka access nahi hai*/
vishal.logMe()

console.log(chai instanceof User)