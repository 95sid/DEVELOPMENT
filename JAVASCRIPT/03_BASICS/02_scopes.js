// var c = 300;
{
  let a = 10;
  const b = 20;
  //   var c = 30;
}

// console.log(a); // Error
// console.log(b); // Error
// console.log(c); // 30 becasue var doesn't follow scope which is a problem

function one() {
  const userName = "Siddhant";
  function two() {
    const webSite = "Youtube";
    console.log(userName);
  }
  //   console.log(webSite); can not access outside the scope
  two();
}
one();

//***********************Intersting*******************//

console.log(addOne(5)); // It will execute 

function addOne(num) {
  return num + 1;
}

addTwo(5); // Give error because it is a declared variable 
const addTwo = function (num) { // Expression 
  return num + 2;
};
