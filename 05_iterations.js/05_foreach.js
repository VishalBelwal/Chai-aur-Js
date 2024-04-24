const coding = ["js", "ruby", "java", "cpp", "python"]

coding.forEach(item => {
    console.log(item)
});

/*function printMe(item){
    console.log(item);
}

coding.forEach(printMe);*/  //only refrence dene par print kar dega

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "Js"
    },
    {
        langName: "Ruby",
        langFileName: "Ruby"
    },
    {
        langName: "Java",
        langFileName: "Java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName, item.langFileName);
})