// A Promise is a Object
// We can handle Promise by using .then() and .catch () or by using async and await
// async ==> wait for work untill its completion
// issue with async/await we did not handle error(doesn't provide functionality to handle error use TRY/CATCH)
// we uses async Ex- if DB connection isn't establised so i don't want to move

// const PromiseOne = new Promise(function (resolve, reject) {
// Do an Async Task
// Db calls , Cryptography, network
//   setTimeout(function () {
//     console.log("Async task is Complete");
//     resolve(); // Connecting resolve and then
//   }, 1000);
// });
// .then() connected to resolve
// .catch() connected to reject
// .finally()
// PromiseOne.then(function () {
//   console.log("Task is Complete");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Task 2  is resolved");
// });

// const PromiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ name: "Siddhant", email: "nobbie@gmail.com" });
//   }, 1000);
// });
// PromiseThree.then(function (user) {
//   console.log(user); // print passed value according to resolve() inside promise
// });

// const PromiseFour = new Promise(function (resolve, reject) {
//   let flag = true;
//   if (!flag) {
//     resolve({ name: "Siddhant", email: "sid@gmail.com" });
//   } else {
//     reject("Something went wrong");
//   }
// });
// const username = PromiseFour.then(funciton(user){
//     return user.name;
// })
// console.log(username) // username will not print becuase return value will be in next then it is called chaining

// PromiseFour.then(function (user) {
//   console.log(user);
//   return user.name; // will be given to next then()
// })
//   .then(function (name) {
//     console.log(name); // print the value got from previous then()
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const PromiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let flag = true;
//     if (!flag) {
//       resolve({ name: "JavaScript", email: "sid@gmail.com" });
//     } else {
//       reject("JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await PromiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error); // Error handled
//   }
// }
// https://jsonplaceholder.typicode.com/users
// consumePromiseFive();

// fetch ==> returns promise and it is a object type
// async function getAllUsers() {
//   try {
// it can take time
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // takes time 
//     console.log(typeof response);
//     const data = await response.json(); // becasue it also takes time
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

// In .then()/.catch() format

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(typeof response)
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((reject) => {
    console.log("E:", reject);
  });
