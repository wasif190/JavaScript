// Rest parameter //
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); // [200, 400, 500]

function printNum(val1, val2, ...num1) {
    return num1;
}

console.log(printNum(200, 400, 500, 600)); // [500, 600]




// Funtion with objects //
const user = {
    username: "John",
    password: 123
}

function loginUser(anyObj) {
    console.log(`${anyObj.username} is loggedin`)
}

loginUser(user);



// Funtion with arrays //
const arr = [100, 200, 300];

function printPrice(arr) {
    return arr[1];
}

console.log(printPrice(arr));