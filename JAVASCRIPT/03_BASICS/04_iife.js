// Immediately Invoked Function Expression (IIFE)
// 1-->If we want to immediately execute our function, but why we want these type of function?
// if we want to start instant DB connection when our application loads
// 2-->to avoid pollution from global scope variables

//IIFE REGULAR FUNCTION
(function chai() {
  console.log(`DB CONNECTED`);
})(); // If there is no semicolon then there will be error 
// because IIFE will invoke the function but it don't know when to stop 

//IIFE ARROW FUNCTION
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Siddhant");