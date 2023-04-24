// Apa itu promise?
// Sebuah objek yang bisa merepresentasikan keberhasilan atau kegagalan peristiwa asynchronous yang akan datang

// janji ditunggu agar bisa dipenuhi atau juga diingkari. disini, istilahnya adalah

// states = (fullfilled, rejected, pending)
// callback = (resolve, reject, finally)

// resolve untuk fulfilled, reject untuk rejected. di finally, pokoknya selesai. mau fullfilled atau rejected gak ngaruh

// action = (then, catch)
// ini untuk error handling. then untuk mengeksekusi yang berhasil, catch gunanya untuk menangkap atau menampung semua error dari promise.

const status = true
let promise = new Promise((resolve, reject) => {
    if(status) {
        resolve("Promise is resolved")
    } else {
        reject("Promise is rejected")
    }
})

// console.log(promise)

promise
    .then((value) => console.log(value))
    .catch((value) => console.log(value))