const marvel_heros = ["thor", "spiderman", "ironman"];
const dc_heros = ["batman", "superman", "flash"];
// marvel_heros.push(dc_heros); // [ 'thor', 'spiderman', 'ironman', [ 'batman', 'superman', 'flash' ] ]
// it takes dc_heros as single element
// console.log(marvel_heros);
//if i want to access the dc heros in marvelheros
// console.log(marvel_heros[3][2]) //flash

// const allHeros = marvel_heros.concat(dc_heros); // it mergets both arrays and return new merged array
// console.log(allHeros);

//spread operator ==> similar to concat but here we can merge multiple arrays
const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);

const anotherArray = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
// if we want single straight array then we use flat
const new_another_Array = anotherArray.flat(Infinity);
// console.log(new_another_Array); // [1,2,3,4,5,6,7,8,9]

// console.log(Array.isArray("Siddhant")); // tells is it array or not?
// console.log(Array.from("Siddhant")); // converts array like objects ['S','i',...'t']
//  [nodelist,string or object] into array

console.log(Array.from({name:"Siddhant"})); // [] because in this case it is not able to 
// directlly converts the object to array so we have to give specific type keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)) // create array from elements