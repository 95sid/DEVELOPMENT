// for of   mostly array specific
// for (const iterator of object) {
// }
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}
const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each Character is ${greet}`);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
console.log(map);

for (const key of map) {
//   console.log(key);
// Output:-
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
}

for (const [key,value] of map) { // Can print key and value seperately  
    // console.log(key,"->",value)
}

// doesn't work on Obj
const myObj = {
    'game1':"NFS",
    'game2':"SpiderMan"
}

for (const [key,value] of myObj) { // gives Error because Object is not iteratable with forOf loops 
    // console.log(key,value) 
}