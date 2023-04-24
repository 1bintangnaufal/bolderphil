const testerData = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.npoint.io/0135ea89a8a1e7d7fad8", true)

    xhr.onload = function () {
        if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject("Error loading data")
        }
    }

    xhr.onerror = function () {
        reject("Network error")
    }

    xhr.send()
})

async function displayTesterData() {
    const response = await testerData
    console.log(response)

    let testerDataForHTML = ""
    response.forEach((data) => {
        testerDataForHTML += `<div class="cards">
                 <img src=${data.image}>
                 <p class="p1">
                     "${data.reviewText}"
                 </p>
                 <p class="p2">
                     - ${data.username || data.organization}
                 </p>
                 <p class="p3">
                     ${data.rating} <img src="assets/Images/black-star.png">
                 </p>
             </div>`
    })

    document.getElementById("cards-wrapper").innerHTML = testerDataForHTML
}

displayTesterData()


// star filter
async function filterTesterData(rating) {
    const response = await testerData
    let testerDataForHTML = ''

    const filteredTesterData = response.filter(function (dataB) {
        return dataB.rating === rating;
    })

    console.log(filteredTesterData)

    if (filteredTesterData.length === 0) {
        testerDataForHTML = `<h3>No one rates on this amount of star yet</h3>`
    } else {
        filteredTesterData.forEach((dataB) => {
            testerDataForHTML += `<div class="cards">
            <img src=${dataB.image}>
            <p class="p1">
                "${dataB.reviewText}"
            </p>
            <p class="p2">
                - ${dataB.username || dataB.organization}
            </p>
            <p class="p3">
                ${dataB.rating} <img src="assets/Images/black-star.png">
            </p>
        </div>`
        })
    }

    document.getElementById("cards-wrapper").innerHTML = testerDataForHTML
}