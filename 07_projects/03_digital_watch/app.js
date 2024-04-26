const clock = document.getElementById('clock')


//js me event control karta hai ye method
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);                                //1 sec ke liye 1000diya hai