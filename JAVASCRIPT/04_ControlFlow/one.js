// Conditional same as C++ 

// Falsy values
// 0,-0,0n,false,"",null,undefined

//Turthy values
//" ","0","false",[],{},function(){}

const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operatior(??) : null,undefined
// it is used to handle the null and undefined 
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10;
// val1 = undefined ?? 10; // 10
// val1 = undefined ?? 10 ?? 20 // 10 ==> First value will be assigned 
// console.log(val1)
