// const score = 400
// console.log(score) // 400 

// const balance = new Number(400)
// console.log(balance) //[Number: 400]

// console.log(balance.toString().length); // converts number to string then we can use string properties 
// console.log(balance.toFixed(2)); // give decimals according to passed value 

// const otherNumber = 23.8264;
// console.log(otherNumber.toPrecision(3)) //returns string

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,00

/****************************Maths****************************************/
// console.log(Math)
// console.log(Math.abs(-1));
// console.log(Math.round(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
console.log(Math.random()) // always gives value between 0 and 1 
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
