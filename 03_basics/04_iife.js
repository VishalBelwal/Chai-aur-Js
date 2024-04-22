/* Immediately Invoked Function Expression (IIFE)*/

//NAMED IIFE

(function chai() {
    console.log("This is an named IIFE");
})();

//2 semicolon laga kar 2 ya 2 se jyada iife likhg sakte hai

/*BY ARROW FUNCTION*/

//UNNAMED IIFE

( (name) => {
    console.log(`DB CONNECTED Welcome ${name}`);
})("vishal");

