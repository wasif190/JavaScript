// Number(str) //
/*
const user = "John";
const age = "19";
console.log(user, typeof(user));
console.log(age, typeof(age));

const ageInNumber = Number(age);
console.log(ageInNumber, typeof(ageInNumber));
*/

// Number() results //
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0




// Boolean(x) //
/*
let isLoggedIn = "john";
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn, typeof(booleanIsLoggedIn));
*/

// 1 => true; 0 => false
// "" => false
// "john" => true




// String(x) //
/*
let password = 12345;
let strNum = String(password);

console.log(strNum, typeof(strNum));
*/



// *********** Operations | Implisit ************** //

let value = 19;
let negValue = -value;

console.log(negValue);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
