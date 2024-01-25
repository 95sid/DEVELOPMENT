// Constructor Functionn ==> Always gives new copy or instance 
// new keyword == constructor Function
// const promise = new Promise();
// const date = new Date();

const user = {
  name: "Siddhant",
  isLoggedIn: true,
  logincount: 11,
};

function User(username, isLoggedIn, logincount) {
  this.username = username; // this keyword points current context so it is pointing object user
  this.isLoggedIn = isLoggedIn;
  this.logincount = logincount;
  return this;
}
// const userOne = User("Siddhant", false, 15);
// const userTwo = User("Sid",true, 15);
// console.log(userOne);
// console.log(userTwo) // OverRides the all value 

const userOne = new User("Siddhant", false, 15);
const userTwo = new User("Sid",true, 15);
console.log(userOne)
console.log(userTwo) // Doesn't create copy
console.log(userOne.constructor) //user-> points to current context 