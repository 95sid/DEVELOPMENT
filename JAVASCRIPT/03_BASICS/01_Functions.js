function sayMyName() {
  console.log("Siddhant");
}
// sayMyName();

function isLoggedIn(userName = "sam") {
  // if userName is undefined than its value will be sam
  // otherwise it will be userName
  return `${userName} just logged in`;
}
// console.log(isLoggedIn()); // undefined just logged in
// console.log(isLoggedIn("")); // just looged in
// console.log(isLoggedIn("Siddhant")); // Siddhant logged in

// Imagine a shoppping cart where user constantly adding new items
// in this case if we gave fix number of parameters to function it will not take all the values
// so to overcome this problem we use rest operator [...variable]

// function calcualteCartPrice(num1){
//     return num1
// }

function calcualteCartPrice(val1, val2, ...num1) {
  // it bundels down all the variable and returns an array
  return num1;
}
// console.log(calcualteCartPrice(100,200,300,400)) // [300,400] ==> because val1 and val2 has first two variable
// console.log(calcualteCartPrice(100,200,300)) // [100,200,300]

// Objects

const user = {
  name: "Siddhant",
  price: 199,
};
function handleObject(anyObject) {
  return `name is ${anyObject.name} and price is ${anyObject.price}`;
}
// console.log(handleObject(user));
// pass direct object 
// handleObject({
//     name: "Siddhant",
//     price: 199,
//   };)


// pass Array directly 
function returnSecondVaue(newArray){
    return newArray[1]
}
console.log(returnSecondVaue([100,200,300,400]))
