// In javascript follows shallow copy means changes occurs in original array 
const myArr = [1,3,4,"Siddhant",true];
// const newArr = new Array(1,2,3,4,3);


// console.log(myArr)
// console.log(newArr)
// myArr.push(5) // push elements in the end of array 
// myArr.pop(); // pop elements from end of array 
// myArr.unshift(10) // add element in starting of array 
/* for large cases unshift isn't used becuase it takes lot of time */
// myArr.shift() // removes from starting of array 

// console.log(myArr.includes()) //return true or false according to element
// console.log(myArr.indexOf(9)) // if value exists then return index otherwise returns -1

// const newArr = myArr.join() // adds all array elements into string 
// console.log(typeof newArr) // ==> string
// console.log(newArr)


//slice and splice 

const arr = [1,2,3,4,5]
console.log("A ",arr)

const myn1 = arr.slice(1,3) //doesn't include 3 and doesn't manipulate the original array
console.log(myn1)
console.log("B ",arr)

const myn2 = arr.splice(1,3) //include 3 also manipulates the original array
console.log(myn2)
console.log("C ",arr)
