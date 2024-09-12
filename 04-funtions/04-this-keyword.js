/*
When we log 'this' in nodejs it gives an empty object because the present context have not any context
but when we run it on browser it rerefer to global object which is window object.
*/

const user = {
    username: "John",
    password: 123,
    message: function() {
        console.log(`${this.username}, welcome to website!`);
        // console.log(this);
    }
}


// user.message();
// user.username = "Jarvis";
// user.message();



// console.log(this);
// user.message();


/* 'this' works with objects such as 'this.username' (in this way) */
function test() {
    let username = "John"
    console.log(this.username); // undefined
}

// test()