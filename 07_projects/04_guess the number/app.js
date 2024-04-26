let randomNumber =  parseInt(Math.floor((Math.random() * 100) + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGues = []  //jo bhi user value store karega use store kar lenge aur user ko hi dikha denge ki wo fir se ud number kouse na kare
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()    //values ko ek hi jagah par rokne ke liye
        const guess = parseInt(userInput.value)   //value lena user se
        console.log(guess);
        validateGuess(guess)  //next par pass kar dena
    })
}

//ye isliye banega kyuki isse pata chalega ki kahi use ne valid number guess kara ya nahi
/*check weather the value lies between 1 and 100*/
function validateGuess(guess) {
    if(isNaN(guess)){
        displaymsg("Please Enter a valid Number");
    } else if(guess < 1){
        displaymsg("Please Enter a namber greater then or equal to 1");
    }  else if(guess > 100){
        displaymsg("Please Enter a number less then 100");
    } else{
        prevGues.push(guess)   //push the number in guess
        if(numGuess === 11){
            displayGuess(guess)
            displaymsg(`Game Over, Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            //check weather the number is equal to random number
            checkGuess(guess)
        }
    }
}


//kahi value random value ke equal hai ya nahi
function checkGuess(guess){
    if(guess === randomNumber){
        displaymsg(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displaymsg(`Number is tooo low`)
    } else if(guess > randomNumber){
        displaymsg(`Number is tooo high`)
    }
}

/*ye wala method seedha dom ke sath interact karega
user ki input value ko wapas se empty kar denge
innnerhtml me aone guess ko add karenge and numbers ko kam kar denge
array ko guess remaining ko update karega*/
function displaymsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

/*lo or hi ke andar msg pass karnge aur print kar denge*/
function displayGuess(guess){
    userInput.value = ''   //cleanup method hai ek tarike se 
    guessSlot.innerHTML += `${guess}, `   //guess ki vaues ko push karte ja raha hai
    numGuess++;     //value show aur add ho rahi hai
    lastResult.innerHTML = `${11-numGuess}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')   //yyha se kush bhi set nahi hoga
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New game</h2>`
    startOver.appendChild(p)
    playGame = false
    newgame()
}

function newgame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.floor((Math.random() * 100) + 1))
        prevGues = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = True
    })
}