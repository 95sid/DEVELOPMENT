function multiply5(num) {
  return num * 5;
}
multiply5.power = 2;

// console.log(multiply5(5)); // 25
// console.log(multiply5.power) // 2
// console.log(multiply5.prototype) // {}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increament = function () {
  this.score++; // gives current context(who is calling you increament his value)
};
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
