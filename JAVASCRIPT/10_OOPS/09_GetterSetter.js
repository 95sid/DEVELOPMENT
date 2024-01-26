// Sometimes we don't want to give direct access to the user so we uses Getter and Setter
// we have automatic method name on the property of getter and setter

// This will give the error that CALL STACK SIZE EXCEED because both setter and constructor calling the value 
// again and again so change the variable name in getter and setter 
// getter and setter both overrides the value of constructor 


// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   get password() {
//     return this.password;
//   }
//   set password(value) {
//     this.password = value;
//   }
// }


class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}

// const sid = new User("Hitesh", 123);
// console.log(sid.password); // we have to set getter and setter both togather,otherwise it will give error
