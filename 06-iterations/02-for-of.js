const arr = [1, 2, 3, 4];

for (const val of arr) {
    console.log(val)
}

const greetings = "Hello JS"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// Maps - Nothing but an object but takes care of unique values and maintain orders //
/*
const map = new Map();
map.set('name', "John");
map.set('age', 19);
map.set('name', 'John');

console.log(map);

for (const [key, value] of map) {
    console.log(key, value)
}
*/


// Maps can be iterate using for-of loop but object don't