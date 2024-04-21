const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const DC_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(DC_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...DC_heros] //ab ye array nahi raha ab ye sab individual spread ho gaye hai

// console.log(allNewHeros);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = anotherarr.flat(Infinity)  //saare array ek array ki form me aa jata hai

console.log(real_another_arr)

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));  //kis bhi cheej ko array ki form me convert kar dega

//INTERESTING
console.log(Array.from({name: "Vishal"}));  //ye convert nahi kar payega ja tak specify nahi karenge ki kiska aray banana hai

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //array ki form me convert kar diya