function makeFunc() {
  let name = "Mozilla";  //yha par name function se bahar hai but fir bhi display ho raha bhai
  function displayName() {
    console.log(name);
  }
  return displayName
}


const myFunc = makeFunc();
myFunc();

//function call karne par sirf displayName hi nahi jayega balki uska outer function agar exist karta hai to wo bhi jayega puri memory ko lexical scoping ke through share kiya jata hai
//isiliye by lexical scoping pura executional context ke sath bahar wala koi bhi element pass hota hai

//clouser ka matlab jab ham pura ka pura scope return kar dete hai to sirf utna hi return na hokar pura lexical scope return hota hai



/*Real Life Impletation*/
// let button = document.getElementById('orange')
// button.onclick = function(){
//   document.body.style.backgroundColor = `orange`;
// }

// let button2 = document.getElementById('Green')
// button2.onclick = function(){
//   document.body.style.backgroundColor = `green`;
// }

//Accessing elements through lexical scoping
function clickhandler(color){
  // document.body.style.backgroundColor = `${color}`;

  return function(){                  //is function kas access hai color ke pas pura lexical scope pass hoga
    document.body.style.backgroundColor = `${color}`;
  }
}

document.getElementById('orange').onclick = clickhandler("orange")
document.getElementById('Green').onclick = clickhandler("green")