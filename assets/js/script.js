function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == ""){
        return alert("Nama harus diisi")
    }   else if(email == ""){
        return alert("Email harus diisi")
    }   else if(phone == ""){
        return alert("Phone harus diisi")
    }   else if(message == ""){
        return alert("Message harus diisi")
    }

    const destination = "1bintangnaufal@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${destination}?subject=${subject}&body= Halo, nama saya ${name} , hal yang ingin saya sampaikan adalah ${message} . Tolong hubungi saya di ${phone} jika tertarik. Terima kasih`
    a.click()

   let data = {
    nama: name,
    email: email,
    noTelepon: phone,
    subject: subject,
    pesan: message,
   }

   console.log(data)
   
}

