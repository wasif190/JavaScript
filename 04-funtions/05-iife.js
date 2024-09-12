// Immediately Invoked Funtion Expressions (IIFE) //
// - For immediately invokation
// - To avoid global polutions

(function test() {
    console.log("Hello JS!");
})();

((x, y) => {
    console.log(x + y);
})(5, 8);