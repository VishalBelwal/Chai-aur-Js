const myObject = {
    JS: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift By Apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*for in loop for arrays*/

const programming = ["Js", "cpp", "java", "rb"]

for (const key in programming) {
    console.log(programming[key])
}