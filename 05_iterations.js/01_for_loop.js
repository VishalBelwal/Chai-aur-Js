//for

//    variable declaration,condition check,increament
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);

}

for(let i = 1; i <= 10; i++){
    // console.log(`Outer Loop value: ${i}`)
    for(let j = 1; j <= 10; j++){
    //    console.log(`inner Loop Value: ${j}`)
    //    console.log(i + '*' + j + ' = ' +i*j)
    }
}


let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}



//break and continue


/*break lagane ke baad loop execute nahi hoga*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 is best number`)
        break;
    }
    console.log(`Value of i is ${index}`)
}

/*Continue lagane ke baad progra execute hote hi rheta hai*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of i is ${index}`)
}