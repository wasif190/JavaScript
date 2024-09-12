const user = {
    name: "John",
    age: 19
}

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}