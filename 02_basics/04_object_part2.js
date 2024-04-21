//declaring an object with help of constructor
//SINGLETON OBJECT

const tinderUser = new Object()
tinderUser.id = "76as87"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullNme: {
        userfullname: {
            firstname: "Vishal",
            lastName: "Belwal"
        }
    }
}

console.log(regularuser.fullNme.userfullname);

/*console.log(regularuser.fullNme.userfullname.firstname);
console.log(regularuser.fullNme.userfullname.lastName);*/

//Merging Objects or combining
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
/*const obj3 = Object.assign({}, obj1, obj2)   //jitni bhi value hai sab combine ho jati hai aur expected result hi aata hai  
// phela wala target hai aur bache hue hai source*/

const obj3 = {...obj1, ...obj2}  //spreading all value and then combining them
// console.log(obj3);


/*accessing keys and values from an object*/
console.log(Object.keys(tinderUser));   //datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //har ek key value ko key value me convert kar diya jayega

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//See more option by using console