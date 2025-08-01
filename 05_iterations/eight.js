// reduce

const myNums = [1, 2, 3, 4, 5, 6]

// const myTotal = myNums.reduce(function (acc , currVal) {
//     console.log(`accumulator ${acc} and currentValue ${currVal}`);    
//      return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc , currval) => acc + currval, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay  = shoppingCart.reduce( (acc, item) => {
     console.log(`Course Name is ${item.itemName} and than Price is ${item.price}.`);
        return acc + item.price
}, 0)
console.log("----------------------------------------------------------");
console.log("Total Amount :                           ",priceToPay);
