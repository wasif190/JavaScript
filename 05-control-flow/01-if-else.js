// <, >, <=, >=, ==, !=, ===


// && Al statement should be true)
// || (Any one should be true)



// Ternay operator: condition ? true : false //


// Falsy values - false, 0, -0, BigInt, "", null, undefined, NaN //
// Truthy values - true, "0", "false", " ", [], {}, funtion(){} //

const arr = [];

/*
if (arr) {
    console.log("Array is not empty")
} else {
    console.log("Array is empty")
}
*/

if (arr.length === 0) {
    console.log("Array is empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
    console.log("Object is empty")
}



// Nullish coalescing operator (??): the story is based on null and undefined //

let val1;
val1 = 5 ?? 10;

console.log(val1);

val1 = null ?? 12
console.log(val1)


val1 = undefined ?? 15
console.log(val1);

val1 = null ?? 10 ?? 4;
console.log(val1);

