const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

/*
marvel.push(dc);
console.log(marvel[3][2]);
*/


// concat() - returns new array withoud modifying any existing arrays //
/*
const newArr = marvel.concat(dc);
console.log(newArr);
*/


// spread operator //
/*
const newArr = [...marvel, ...dc];
console.log(newArr);
*/


// flat(depth) //
/*
const arr = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10];
const newArr = arr.flat(Infinity);

console.log(newArr);
*/



// Array.isArray() - true or false //
console.log(Array.isArray("John"));

// Array.from() - returns array //
console.log(Array.from("John"));

console.log(Array.from({name: "John"}));
/*
it will not convert an object directly, we have to tell that for which it should make an array 
ex. for key or for value
*/


// Array.of() 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
