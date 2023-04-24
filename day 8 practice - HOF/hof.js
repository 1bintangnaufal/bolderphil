// for each
const myNumbers = [1, 2, 3, 4, 5]
myNumbers.forEach(function (item) {
    console.log(item)
})

// for(let i = 0; i < myNumbers.length; i++) {
//     console.log(i)
// }



//  map
const myNumbersAgain = [1, 2, 3, 4, 5]
const double = myNumbersAgain.map((item) => {
    return item * 2
})

console.log(double)



// filter
const userAge = [16, 17, 14, 28, 36]
const ableToJoin = userAge.filter((data) => {
    return data % 2 === 1;
})
// maksud dari % 2 === 1 adalah data yang kalau dibagi 2 ada sisanya 1 akan ditampilkan. disini ada 17
console.log(ableToJoin)



// reduce
const yourNumber = [1, 2, 3, 4, 5]
const reduce = yourNumber.reduce((prev, current) => {
    return prev + current
})
// maksud dari code ini adalah menjumlahkan semua angka yang ada di array
console.log(reduce)