// this ==> this keyword refers the current context (values)
const user = {
    name:"Siddhant",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to our Website`);
        // console.log(this) // ==>print current context 
    }
}
// user.welcomeMessage();
// user.name = "Sam"
// user.welcomeMessage();
// console.log(this) // returns {} object 
// but in window it will return the window object because in windows current context is windows 

// function chai(){
//     let userName = "Siddhant"
       // console.log(this) // lot of values it will print because it is refering to global object here 
//     console.log(this.userName) // undefined it will work only in objects  
// }

//******************Arrow vs Regular Functions*************** */
/* 
1--> In Regular Function we have argument object that return arguments 
{
  '0': 'hello',
  '1': 400,
  '2': false
}
but in Arrow function we don't have any argument object 

2--> this keyword in normal functions it refers to global object
** In arrow function it is empty ** Not Confirm 

*/
// Arrow Function 
// () => {}
// const chai = () => {
//     userName = "Siddhant"
//     console.log(this) // {}
//     console.log(this.userName) // undefined 
// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => (num1+num2) // Implicit Return 
const addTwo = (num1,num2) => ({username:"Siddhant"}) // for Objects
console.log(addTwo(3,4));