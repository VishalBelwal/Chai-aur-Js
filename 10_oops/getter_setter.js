class user {
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase()
  } 
  set email(value){
    this._email = value
  }

  get password(){        //get ka matlab hai ki isi bhi value ko memory se lekar aana
    return this._password.toUpperCase()
  } 
  set password(value){    //set ka matlab hai value ko as a property define karna
    this._password = value.toUpperCase()
  }
}

const vishal = new user("v@vishal.ai", "abc")
console.log(vishal.password)