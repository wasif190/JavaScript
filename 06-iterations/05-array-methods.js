const books = [
    {
        title: "Book1",
        publish: 1925,
        genre: "History",
        price: 233
    },
    {
        title: "Book2",
        publish: 2625,
        genre: "Comics",
        price: 273
    },
    {
        title: "Book3",
        publish: 1725,
        genre: "History",
        price: 386
    },
]

const myNum = [1, 2, 3, 4, 5, 6, 7, 8];

// filter()
const newNums = myNum.filter(num => num > 4);
console.log(newNums);

const userBook = books.filter(book => book.genre === "History");
console.log(userBook);



// map()
const mapNums = myNum.map(num => num + 2);
console.log(mapNums);


// reduce(), chaning
const bookCartPrice = books
    .map(book => book.price)
    .reduce((acc, curr) => acc + curr, 0);

console.log(bookCartPrice);
