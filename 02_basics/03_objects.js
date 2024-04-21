// Singleton

// obejecy literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Vishal",
    "Full Name": "Vishal Belwal",   //is type ki value ko dot se nahi access kar sakte
    /*mySym: "myKey1", anhi ye symbol ki trah use nahi ho raha iska type to string hai*/
    [mySym]: "mykey1",    //value me koi farak nahi hota hai
    age: 18,
    location: "Delhi",
    email: "vb@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

//jo bhi values hai wo ek string ki tarah rakhi ja rahi hai js me 

/*HOW TO ACCESS*/
console.log(Jsuser["email"]);   //dot se nahi karnge because kuch value aisi hoti hai ki unhe ham dot se kar hi nahi sakti like agar string ke fom me key dal de to

/*console.log(Jsuser[mySym]);


Jsuser.email = "vb@chatgpt.com"   //object overwrite
Object.freeze(Jsuser)  //iske baad koi bhi changes ko lagaenge to wo propagate nahi honge

Jsuser.email = "sdhcgaijh2@gmail.com"  //implement nahi hui
console.log(Jsuser);*/


Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

/*console.log(Jsuser.greeting);  //ise khete hai function returnback matlab function refrence se call hua hai only */
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());