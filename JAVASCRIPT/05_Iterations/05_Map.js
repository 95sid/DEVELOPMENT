const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = Nums.map((item) => item + 10);

// chaining

const newNums = Nums.map((item) => item * 10) 
  .map((item) => item + 1)   //[(11, 21, 31, 41, 51, 61, 71, 81, 91, 101)]
  .filter((item) => item % 3 === 0); // [ 21, 51, 81 ]
console.log(newNums);
