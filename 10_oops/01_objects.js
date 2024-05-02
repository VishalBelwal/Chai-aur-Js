//object literals

const user = {
  username: "Vishal",
  loginCount: 8,
  signedIn: true,

  //yha tak objects ke andar sar properties thi

  getUserDetails: function(){
    // console.log("Got User Details");
    // console.log(`Username: ${this.username}`);
    //console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//agar global context me log karaenge this ko to  empty parenthesis milega but aisa browser me nahi hota wha hame ye windiw ki form me milta hai


//constructor function

/*const promise = new Promise()*/
//ye new keyword jo hai wo ek constructor function hai ye simply allow karta hai ki ham ek hi object se multiplte instances bana sake

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this    //ye karte hi hamne object pass on ar diya, ise likhe ya na likhe ye hamesha implicitly define hotsa hi hai
}

const userone = new User("Vishal", 12, true)
const userTwo = new User("Chai", 10, false)   //saari ki saari values overwrite ho jayengi jabki hame to usertwo print bhi nahi karwaya 

console.log(userone);
console.log(userTwo);

//constructor function har baar ek naya instance deta hai


/*jaise hi new keyword use karte hai to ek empty object/naya object create hota hai jise instance khete hai then
new keyword ke karan ek constructor function call hota hai
then this keyword ke andar sare aruguments jo pass kiye hai wo inject ho jate hai then
hame finally function ke andar mil jata hai
*/

//instanceof se instance check kar sakte hai ki same object hi hai ya nahi aur true ya fir false me value return hogi