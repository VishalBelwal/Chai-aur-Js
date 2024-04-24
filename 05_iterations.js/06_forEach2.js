const coding = ["js", "ruby", "java", "cpp", "python"]

/*const values = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(values);   //basic code likhne me return nahi kiya jab undefined hai */

/*const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter bhi apne andar callback hi leta hai
const newNums = myNums.filter( (num) => {
    return num > 4   //filter me return use karna padta hai otherwise empty array milega
} )
console.log(newNums); */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter( (bk) => bk.genre === "History" )      //array ke andar se har ek object aa gaya hai hamare pas jise ham bk bol rahe hai, wo saare elements return honge jo true honge

userbooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "History" && bk.edition >= 2000
} )
console.log(userbooks);