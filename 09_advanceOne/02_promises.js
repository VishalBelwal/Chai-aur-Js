//jyada tar ham ye dekhenge ke ham promises consume karte hai
//promise is an object
//promise apne andar callback leta hai aur callback hell(matlab call backe ke andar callback aur uske andar callback) use reduce karta hai

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task like:-
  /*like db calls,connect,inject,recieve etc
  cryptography and network call related*/ 
  setTimeout(function(){
    console.log('Async task is Completed');
    resolve()      //resolve connected to .then
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise Consumed");
})                     //consuming promise,.THEN directly resolve ke sath connected hota hai iske sath ek function milta hai jiske  saath ham koi bhi kaam kar sakte hai jo bhi hame value deni hai wo return hoti hai



new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async Task 2")
    resolve()     //resolve call
  }, 1000)
}).then(function(){
  console.log("Async 2 Resolve");
})



const promise3 = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve({username: "Chai", email: "chai@ggl.com"})      //resolve me data pass kar diya
  }, 1000);  
})

promise3.then(function(user){      //resolve ke andar jo bhi data hota hai wo yaha par mil jata hai
  console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
  setTimeout(() => {
      let error = true;
      if(!error){
        resolve({username: "Vishal", password: '123'});
      }else{
        reject('ERROR: SOMETHING WENT WRONG');
      }
  }, 1000);
})


/*agar program sahi chala to .then laga ke value le lenge aur error aaya to .catch laga kar uski value le lenge*/
/*avoiding callback hell*/
promise4
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
  console.log(username);
})
.catch((error) => {
  console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected"))      //ye hamesha execute hota hai ya fir ise default bhi man sakte hai bcuz promie ya fir then infinitely to chalenge nahi kahi to rukenge



const promise5 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if(!error){
      resolve({username: "JavaScript", password: '123'});
    }else{
      reject('ERROR: Js WENT WRONG');
    }
}, 1000);
});

// async await ka syntax isme gracefully ham catch handle nahi karte ham

async function consumePromisefive(){
  try{
    const response = await promise5
    console.log(response) 
  } catch (error) {
    console.log(error);
  }
}

consumePromisefive()


// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); //string me data recieve ho raha tha json me convert kar diya
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();


fetch('https://api.github.com/users/Vishalbelwal')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => console.log(error))