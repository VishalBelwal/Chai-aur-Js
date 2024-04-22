/*let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);*/

//scopes are of two type in js global and block scope
/*Bloack scope {} ke andar hota hai iske andar ka variable bahar execute nahi hota*/

let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}
console.log(a);


/*Workin of a nested scope*/
function one(){
    const username =  "Vishal"

    function two(){
        const website =  "Youtube"
        console.log(username);
    }
    // console.log(website);   -> ye access nahi hoga

    two()
}

one()



// **************INRERESTING********************
function addOne(num){
    return num + 1
}

addOne(5)


//ISKO FUNCTION SE UPAR CALL NAHI KAR SAKTE CUZ HAMNE ISME FUNCTION BANANE KE SATH DECLARE BHI KAR DIYA HAI
const addTwo = function(num){
    return num + 2
}
addTwo(5)