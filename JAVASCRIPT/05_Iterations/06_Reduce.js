const myNums = [1, 2, 3];
const myTotal = myNums.reduce((acc, currval) => {
  console.log(`${acc} and ${currval}`);
  return acc + currval;
},0);
// console.log(myTotal)

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

// const total = shoppingCart.reduce((acc,item)=>acc+item.price,0);
const total = shoppingCart.reduce((acc,item)=>{
    console.log(`${item.itemName} and ${item.price}`)
    return acc+item.price;
},0)
console.log(total)