// Memory allocation //

/*
It's aboute how javascript work under the hood or memory.
Garbage collection takes place here we have to manage memory while writing code with some lanaguges.

We have two types of memory : Stack and Heap
- Stack memory used for primitive values
- Stack gives the copy of the variable

- Heap memory used for non-primitive values
- Heap gives the reference of the original value
*/



let user = "Wasif";
let user2 = user;
// Both are different copy, it's refering to two different variables
// When we change something in "user2" variable it will not effect the "user" variable

console.log(user);
console.log(user2);

user2 = "John";

console.log(user);
console.log(user2);



const loginInfo = {
    username: "Jarvis",
    password: 1234
}

const anotherUserInfo = loginInfo;

/*
The "anotherUserInfo" is  refering to "loginInfo" object, whatever changes will be done in anotherUserInfo 
will effect loginInfo.
*/

console.log(loginInfo.username);
console.log(anotherUserInfo.username);

anotherUserInfo.username = "AI";

console.log(loginInfo.username);
console.log(anotherUserInfo.username);