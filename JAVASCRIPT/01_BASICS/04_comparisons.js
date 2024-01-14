// console.log(1 != 3)
// console.log(1 >= 3)
// console.log(1 == 3)
// console.log(1 <= 3)

console.log("2">1) //true ==> becasue JS automatically converts the string into the number
// but result always may not be predictible so use same type of datatypes for comparisons

console.log(null == 0) // false
console.log(null > 0) // false
console.log(null >= 0) // true
// because comparisons convert the null into number 0 so when we do >= it returns true 
// for > it returns false

// === (strict check) check value as well as datatype 
console.log("2" == 2) //true
console.log("2" === 2) //false ==> because datatype for both variable is different