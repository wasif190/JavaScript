/*
const arr = [1, 2, 3, 4];

for (let index = 0; index < arr.length; index++) {
    const elm = arr[index];
    console.log(elm);
}
*/



/*
for (let i = 1; i <= 2; i++) {
    console.log(i);
    for (let j = 0; j < 8; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}
*/



for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(i);
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`);
}
