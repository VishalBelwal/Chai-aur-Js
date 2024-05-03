// let myName = "Vishal"

// console.log(myName.length);

//have to do it with a function called trueLength

let myHeros = ["thor", "Spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey Power is ${this.spiderman}`);
  },
};

Object.prototype.vishal = function(){
  console.log(`Vishal is present in all object`);
}
 
Array.prototype.heyVishal = function(){
  console.log(`Vishal Says hello`)
}

/*yaha par ham top level par gaye waha par object ke andar ek nayi property define ki aur isko ab ham access kar sakte hai*/
// heroPower.vishal()
myHeros.vishal()
myHeros.heyVishal()
// heroPower.heyVishal()    //iske pas heyVishal ka access nahi hai but array ke pass to power hai

/*Inheritance*/
const user = {
  name: "Vishal",
  email: "chai@ggl.com"
}

const Teacher= {
  makeVideos: true
}

const TeachingSupport = {
  isAvialable: false
}

const TaSupport = {
  makeAssignment: 'Js assignment',
  fullTime: true,
  __proto__: TeachingSupport          //ab teaching support teaching support ki sari property follow karega
}
Teacher.__proto__ = user     //yahi protype inheritance hai ki ham kaise kisi aur k property ko access kar sakte hai


//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anothername = "Vishal     "

String.prototype.trueLength = function(){
  console.log(`${this}`)
  console.log(`The true length is ${this.trim().length}`)
}

anothername.trueLength()
"vishal".trueLength()
"iceTea".trueLength()
