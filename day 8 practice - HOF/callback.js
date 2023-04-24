function hello() {
    return "Hello there,"
}

function print(callback, name) {
    return callback() + name
}
const greet = print(hello, " Yuqi!")

console.log(greet)