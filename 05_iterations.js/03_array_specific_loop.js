/*for of loop*/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

/*Maps*/

//js me map bhi apne aap me ek object hai
//isme value unique allowed hoti hai aur jis order mne enter kiya hai usi me rheti hai
//map ke upar itni asani se iteration nahi kiya jaa sakta
const map = new Map()

map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map);

//applyimg loop with array destructuring
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': "NFS",
    'game2': "GTA"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }                        //object are not iteratable like this way

