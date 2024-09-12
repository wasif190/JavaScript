const arr = [1, 2, 3, 4];
const charArr = ["Jarvis", "John"];

/*
console.log(arr.length);
console.log(charArr[1]);
*/

const arr2 = new Array(1, 2, 3, 4);
// console.log(arr2);


// Array methods //

/*
arr.push(5); // add to end
arr.pop(); // remove from last
*/

/*
arr.unshift(0); // add to begin
arr.shift(); // remove from begin
*/

/*
console.log(arr.includes(3));
console.group(arr.indexOf(2));
*/

/*
const newArr = arr.join();
console.log(newArr, typeof(newArr))
*/


// slice and splice
console.log("A ", arr);

const myn1 = arr.slice(1, 3);
console.log(myn1);

console.log("B ", arr);

const myn2 = arr.splice(1, 3);
console.log(myn2);

console.log("C ", arr);

/*
- slice does't include range
- splice includes range

- slice does not manuplate the original array
- splice manuplates the origina; array
*/