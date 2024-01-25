function setUserName(username){
    this.username = username
}
function createUser(username,email,password){
    // setUserName(username) // Actually it is not called because after execution all internal detail gone  

    setUserName.call(this, username); // Explictly call the function and holds reference because it gives the refernce of current this 
    this.email = email
    this.password = password
}

const chai = new createUser("chai","nobbie@fb.com",12345) // createUser { email: 'nobbie@fb.com', password: 12345 } 
console.log(chai)