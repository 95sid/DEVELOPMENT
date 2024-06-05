/*
    conversion in Number
    "33" => 33
    "33abc" => NaN
    "null" => 0
    "undefined" => NaN
    "boolean" => 0/1

*/

/*
    conversion in boolean
    1 ==> true
    0 ==> false
    "" ==> false
    "siddhant" ==> true
    null ==> false
    undefined ==> false
 */
/*
    conversion in string
    1 ==> 1 (type string)
    undefined ==> string
    null ==> string
 */

let booleanScore = 1
let scoreInboolean = Boolean(booleanScore);
// console.log(scoreInboolean)


// for string
let score = "33abc"
// console.log(typeof(score))
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // Nan --> Not a number 

//for null
let newScore = null
// console.log(typeof newScore) //object
let valueInNumberNewScore = Number(newScore)
// console.log(typeof valueInNumberNewScore) //number
// console.log(valueInNumberNewScore) //0

// for undefined
let value = undefined
// console.log(typeof value) //undefined
let valueInBollean = Boolean(value);
console.log(valueInBollean)
let valueInNumberValue = String(value)
console.log(typeof valueInNumberValue) //number
console.log(valueInNumberValue) //NaN

/****************************Operations*************************/
let str1 = "Hello"
let str2 = " Siddhant"
let str3 = str1+str2
// console.log(str3)
// console.log("1" + 2) // ==> 12
// console.log(1 + "2") // ==> 12
// console.log("1" + 2 + 2) // ==> 122
// console.log(1 + 2+ "2") // ==> 32

