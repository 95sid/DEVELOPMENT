// the main difference between file extension (.txt) and programing files extension(.js,.cpp)
// is that in .js we have predecided words for OS, if this occured then do this 
// such as for printing in javascript we use Console.log but in cpp we use cout  

const accountId = 12345
let accountEmail = "sid1234@gmail.com"
var accountPassword = "12345"
let accountState // Output --> undefined 
accountCity = "Chandigarh" // don't prefer 

// accountId = 12456 --> NOT ALLOWED because it has const datatype 

accountEmail = "gupta@gmail.com"
accountPassword = "4324"
accountCity = "Noida"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// Difference between var and let  (don't use var)
/* var --> it doesn't follow block scope and functional scope
means if a programmer declare a variable(accountPassword) by using var and
some other programmer also declared same varible(accountPassword) and changes the value 
in this case all value of that variable (accountPassword) will be changed which is a problem
so to avoid this problem of var, let came, it follows block scope  */