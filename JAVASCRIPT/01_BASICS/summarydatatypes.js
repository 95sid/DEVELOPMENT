// two type of datatypes on the basis of
// ==> how data is stored in memory
// ==> how data is accessed from memory

/*
 1 --> Permitive  or call by value (when we call them we get seprated copied value
it doesn't give memory refrence) 
7 types: Number, String, Boolean, null, undefined, Symbol, bigInt 
*/

// const id = Symbol("123");
// const anotherid = Symbol("123");
// console.log(id === anotherid); //false ==> becasue symbol makes it unique irrespective of passed value

// const bigNumber = 275280932850702n; //bigInt

/*************************************************************************************** */

/*
 2 --> Non primitive or refrence type(they can allocate direct refrence) 
  types: Objects, Arrays, Functions
 */
// const heros = ["shaktiman","nagraaj"] // type object
// const myObj = { // type object
//     name: "Siddhant",
//     age: 21,
// }
// const myFunction = function(){} //type function object

/***************************************************************************************/

// stack (primitive) heap(non primitive)

let myName = "Siddhant";
let myNewName = myName;
myNewName = "Sid";
// myName = Siddhant
// myNewName = Sid //because permitive doesn't give direct memory refrence it gives copied value

let UserOne = {
    email:"sid@google.com",
    upi:"sid@ybl",
}
let userTwo = UserOne;
userTwo.email = "sidnew@google.com";

// userOne.email = "sidnew@google.com"
// userTwo.email = "sidnew@google.com" becasue nonpermitive give value by reffrence 