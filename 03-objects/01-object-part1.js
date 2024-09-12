const mySym = Symbol("key1");

const user = {
    username: "John",
    password: 1923,
    [mySym]: "mykey1",
    greet: function() {
        console.log("Hello JS!")
    },
    greet2: function() {
        console.log(`Hello ${this.username}`)
    }
}


// user.password and user["password"] //
/*
console.log(user.password);
console.log(user["password"]);

console.log(user[mySym]);
*/


// freeze() //
/*
user.password = "123"
console.log(user);

Object.freeze(user);
user.password = "78999";

console.log(user);
*/



console.log(user.greet())
console.log(user.greet2())


