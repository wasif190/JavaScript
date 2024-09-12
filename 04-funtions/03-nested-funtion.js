function user() {
    let username = "John";

    function logginUser() {
        let password = 19;
        console.log(`User: ${username} Password: ${password}`);
    }
    logginUser();

    // console.log(password); 
}

// user();


if (true) {
    const username = "John";
    if (username === "John") {
        const password = 123;
        console.log(username + password);
    }
    // console.log(password);
}

// console.log(username);





// ------------ Interesting concept ------------- //
/*
Hoisting will not work with funtion expression
*/

console.log(addOne(5))

function addOne(num) {
    return num + 1;
}


// Funtion expression
addTwo(5);

const addTwo = function(num) {
    return num + 2;
}
