//single ton
// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Samme";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "sid@google.com",
  fullname: {
    userfullname: {
      firstname: "Siddhant",
      lastname: "gupta",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)

//combining of object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 4: "a", 3: "b" };
const obj3 = Object.assign({}, obj1, obj2); //can also give more than two objects
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //return array of keys most useful for database cases
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name1')) // return true or false

const course = {
  courseName: "js in hind",
  coursePrice: "999",
  courseInstructor: "hitesh",
};
// if i want to access some property of object i have to write Object.key
// to avoid this repeation we use Object De-structure after that we can directly use the property

// const { courseInstructor } = course;
// console.log(courseInstructor)
const { courseInstructor: Instuctor } = course; //value will be same but name is changed
console.log(Instuctor);


// api works as a waiter between user and application 
// it is nothing but values that comes from backend
// in past used to come in XML format but currently in comes in JSON format

//JSON FORMAT 
// *** object ***\\
// {
//     "name":"hitesh",
//     "course":"jsinhindi",
//     "price":"free"
// }

// ARRAY FORMAT 
// [
//     {}
//     {}
// ]