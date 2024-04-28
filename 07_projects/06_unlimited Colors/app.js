//Generating random Color

const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#"
  for(let i = 0; i < 6; i++){
    // console.log(Math.floor(Math.random()));
    color += hex[Math.floor(Math.random() * 16 )]   //hex ki random position select karni hai
  }
  return color;
}

console.log(randomColor())

let intervalid;
const startChangingColor = function(){

  // intervalid = setInterval(changebgColor, 1000)
  /*chwcking Interval id*/
  if(!intervalid){
    intervalid = setInterval(changebgColor, 1000)
  }

  function changebgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}
const stopChangingColor = function(){
  clearInterval(intervalid);     //bar bar value overwrite ho rahi hai aacha jab rahega ki next ke aate hi phele wali flushout ho jaye
  intervalid = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)