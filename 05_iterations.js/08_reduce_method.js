const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (accumulator, currentValue) => {
    console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile Dev",
        price: 5999
    },
    {
        itemName: "Data Scientist",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(pricetopay);

