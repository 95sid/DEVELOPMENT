const myDate = new Date(); // create an instance of current date
// console.log(myDate)
// console.log(myDate.toString()) //2024-01-10T14:46:10.646Z
// console.log(myDate.toISOString()) //2024-01-10T14:46:10.646Z
// console.log(myDate.toJSON()) //2024-01-10T14:46:10.646Z
// console.log(myDate.toDateString()) //Wed Jan 10 2024    
// console.log(myDate.toLocaleDateString()) //10/1/2024
// console.log(myDate.toLocaleString()) // 10/1/2024, 8:16:10 pm
// console.log(typeof myDate) // object

// const myNewDate = new Date(2024,0,5); // month starts from 0 in JS
const myNewDate = new Date(2024,0,5,5,3,40);// can give specific time also
// console.log(myNewDate.toLocaleString());
const myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myNewDate.getTime()); // widely used in travelling/booking website
// console.log(Math.floor((Date.now()/1000)%60)); // seconds
// console.log(Math.floor((Date.now()/(60000)%60))); // minutes


const newDate = new Date();
const mydate = newDate.toLocaleString('default',{ // can customize more     
    // weekday:"long",
    dateStyle:"full" //Friday, 12 January, 2024
})
console.log(mydate); // Friday, 12 January, 2024


