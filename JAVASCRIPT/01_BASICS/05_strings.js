let name = "Siddhant";
let repoCount = 50;
// console.log(name+repoCount+" value"); // ==> Not Prefrable

// string interpolation ==> ``
// console.log(`${name} ${repoCount} value`) // ==> Prefrable


const gameName = new String("noBbie75"); //provides multiple method 
console.log(gameName[0].__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName) // string doesn't change because it is primitive 
console.log(gameName.charAt(2)) // pass index get character
console.log(gameName.indexOf('B')) // get index 
const newString = gameName.substring(0,4) //last value doesn't get incuded 
// console.log(newString)

const anotherString = gameName.slice(3,-5)
// slice explanation 
// if startindex<0 and endindex > 0
// then it will start from max(startindex+stringlength,0) to endindex 
// if startindex<0 and endindex<0
// then it will start from max(startindex+stringlength,0) and print it according to reverse 
// ex slice(-6,-5) startindex = (-6+8,0) = 2 / endindex = -5 take from backside so ==> B
// console.log(anotherString)

const newStringOne = "  Siddhant  "
console.log(newStringOne)
console.log(newStringOne.trim()) // remove extra space from string from start to end 

const url = "www.siddhant%20gupta.com"
console.log(url.replace('%20','-'))
console.log(url.includes('siddhant')) // true
console.log(url.includes('sidhant')) // false

const newName = 'sid-gupta'
console.log(newName.split('-')); // convert in arrray ['sid','gupta']

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3); // limited number of splits  
console.log(splits); // [ "Hello", "World.", "How" ]
