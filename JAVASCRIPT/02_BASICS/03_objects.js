// ways to create objects
// 1==> singleton
// Object.create

//2==> literals 
/* 
    In arrays we have predecided keys/indexs such as: a[0],a[1] 
    but Object gives freedom to change the keys it can be anything from number to string
    but in backend system take keys in string format 
*/
const mySym = Symbol("key1")
const Jsuser = {
    name:"Siddhant", 
    "full name": "Siddhant Gupta",
    age:21,
    [mySym]:"mykey1", //for symbols 
     location:"Dehradun",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thrusday"]
}
// console.log(Jsuser.age)
// console.log(Jsuser["age"]) // we gave string becasue object takes keys as string in backend
//  console.log(Jsuser."full name") //error no way to access it using dot 
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym]) // to access the symbol from the string 


// override object values 
// Jsuser.age = 20;
// if we don't want to override the values of Objects
// Object.freeze(Jsuser);
// Jsuser.age = 21
// console.log(Jsuser) // object isn't changed but it doesnot throw any error

Jsuser.greetings = function(){
    console.log("Hello World")
}
Jsuser.greetingsTwo = function(){
    console.log(`Hello Js user,${this["full name"]}`)
}
console.log(Jsuser.greetings())
console.log(Jsuser.greetingsTwo())

