// forEach() does not return any values

const users = [
    {
        username: "John",
        password: 123
    },
    {
        username: "AI",
        password: 18653
    },
    {
        username: "Jarvis",
        password: 963553
    }
];

users.forEach(user => console.log(user.password))