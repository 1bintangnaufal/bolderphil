function multiplyBy(n) {
    return function (x) {
        return x * n
    }
}

const double = multiplyBy(2)
console.log(double(98))



function logNumber(n) {
    console.log(`I love you`)
}

function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i)
    }
}

repeat(3001, logNumber)