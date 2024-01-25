// If i want to attach unique id to user when it gets created

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const user = new User("hitesh");
// console.log(user.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone","iphone@,com");
iphone.logMe();
console.log(iphone.createId()) // doesn't give access to child because it is static 
