const user = new Object();

user.username = "John";
user.password = 123;

/*
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('username'));
*/


const regularUser = {
    name: "John",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

// Optional chaining - If the value is present then do //
// console.log(regularUser.fullName?.userFullName.firstName);



// ------- Combining ---------- //
// Object.assign(target, source)
// Spread operator

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, obj2}



const users = [
    {
        id: 1,
        name: "User 1"
    },
    {
        id: 2,
        name: "User 2"
    },
    {
        id: 3,
        name: "User 3"
    },
    {
        id: 4,
        name: "User 4"
    }
];

console.log(users[1].name);

