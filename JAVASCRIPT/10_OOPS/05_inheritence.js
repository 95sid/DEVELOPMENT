class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is: ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // referes parent class constructor
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@meta.com", "1234");
chai.addCourse()
chai.logMe() // has access of User's method

console.log(chai instanceof Teacher) //  true
console.log(chai instanceof User) // true