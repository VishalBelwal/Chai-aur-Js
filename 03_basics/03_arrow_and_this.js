const user = {
    username: "Vishal",
    price: "199",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"  //isme sam hamara context hai aur context change ho gaya
// user.welcomeMessage()

// console.log(this);   //node ke andar this value empty object ki trah treat hoti hai


/*function chai(){
    let username = "Vishal"
    console.log(this);
}

chai()      //node environment me agar this ko function ke andar run karenge to values aati hai*/

// const chai = () => {
//     let username = "Vishal"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()

/*BASIC ARROW FUNCTION   EXPLICIT RETURN*/
/*const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(2,3));*/

//IMPLICIT RETURN

// const addtwo = (num1, num2) =>  (num1 + num2)   //ISME RETURN KEYWORD NAHI LIKHNA PADEGA
// console.log(addtwo(2,5))

const addtwo = (num1, num2) =>  ({username: "Vishal"})   
addtwo()