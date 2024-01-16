//Filter method returns an array

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myNums = Nums.filter((item)=>item>5) // [ 6, 7, 8, 9, 10 ]
// const myNums = Nums.filter((item)=>{
//     return item>5
// }) // [ 6, 7, 8, 9, 10 ]

// const myNums = []
// by using Foreach loop
// Nums.forEach((item)=>{
//     if(item>5){
//         myNums.push(item); // [ 6, 7, 8, 9, 10 ]
//     }
// })
// console.log(myNums) // [ 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let myBooks = books.filter((bk) => bk.genre === "Fiction");
// console.log(myBooks);
// Output
// [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
// ]
myBooks = books.filter((bk)=>bk.publish>1995 && bk.genre ==="History")  
console.log(myBooks)
