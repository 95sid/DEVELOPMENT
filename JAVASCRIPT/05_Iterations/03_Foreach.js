// It is a HighOrder function
const coding = ["js", "cpp", "ruby", "java", "python"];

// 1
// coding.forEach(function(item){ // because it is call back function it doesn't have name
//     console.log(item)
// })

// 2
// Using Arrow Function
// coding.forEach((item)=>{
//     console.log(item)
// })

// 3
// function print(item){
//     console.log(item);
// }
// coding.forEach(print);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// Object in Arrays

const myCoding = [
    {
        language:"js",
        languageFullName:"JavaScript"
    },
    {
        language:"java",
        languageFullName:"Java"
    },
    {
        language:"cpp",
        languageFullName:"C++"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language,item.languageFullName);
})

const values = coding.forEach((item)=>{
    return item
})
// console.log(values) // undefined it doesn't return any values 
