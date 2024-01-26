// getOwnPropertyDescriptor tells us about most of the hidden things about object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


const chai = {
    name:"ginger Chai",
    price:250,
    isAvailable: true
}
// to change the property of object 

Object.defineProperty(chai,'name',{
    writable:false, // Stop overwriting name property 
    enumerable:false // Stop iteration name property 
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
for (let [key,value] of Object.entries(chai)) { // directly doesn't change iteration
    console.log(`${key}:${value}`);
}
