// Ajax (asynchronous javascript and xml) itu teknik mendapatkan data dari hasil interaksi permintaan ke server. dengan adanya ajax kita bisa mendapatkan data dari server maupun internet menggunakan API (application programming interface)
// json kepanjangannya adalah javascript object notation. gunanya untuk menyimpan banyak value yang dapat dijadikan link dan di share

const xhr = new XMLHttpRequest()

xhr.open("METHOD", "LINK URL", "STATUS")

// 1. GET, POST, PATCH, DELETE
// 2. https://api.npoint.io/0135ea89a8a1e7d7fad8
// 3. true/false

xhr.onload = function() { }
xhr.onerror = function() { }
xhr.send()
// xhr.onload = function() { } gunanya untuk mengecek status request saat loading
// xhr.onerror = function() { } gunanya untuk menampilkan apa yang diinginkan ketika error
// xhr.send() gunanya untuk mengirim sebuah request ke alamat server