// const testerData = [
//     {
//         image: "assets/Images/soyeon.jpg",
//         reviewText: "100 percent made with talent, <br> the master of competition.",
//         username: "Soyeon",
//         rating: 3
//     },
//     {
//         image: "assets/Images/miyeon.jpg",
//         reviewText: "Fairies and Goddesses envy <br> me. There, I said it.",
//         username: "Miyeon",
//         rating: 5
//     },
//     {
//         image: "assets/Images/minnie.jpg",
//         reviewText: "You'll drown in my siren voice <br> and eyes.",
//         username: "Minnie",
//         rating: 5
//     },
//     {
//         image: "assets/Images/soojin.jpg",
//         reviewText: "Becareful with my fluidity, I <br> captive everyone.",
//         username: "Soojin",
//         rating: 5
//     },
//     {
//         image: "assets/Images/yuqi.jpg",
//         reviewText: "What is Senorita? I don't know <br> who made that song.",
//         username: "Yuqi",
//         rating: 1
//     },
//     {
//         image: "assets/Images/shuhua.jpg",
//         reviewText: "Don't you ever mess with this <br> boss baby.",
//         username: "Shuhua",
//         rating: 1
//     },
//     {
//         image: "assets/Images/gidle-hwaa.jpg",
//         reviewText: "We are the greatest group of <br> all time.",
//         organization: "(G)I-DLE",
//         rating: 5
//     },
//     {
//         image: "assets/Images/cube-ent.jpg",
//         reviewText: "We are the worst company <br> of all time.",
//         organization: "CUBE Entertainment",
//         rating: 3
//     },
// ]

// function displayTesterData() {
//     let testerDataForHTML = ''

//     testerData.forEach((item) => {
//         testerDataForHTML += `<div class="cards">
//         <img src=${item.image}>
//         <p class="p1">
//             "${item.reviewText}"
//         </p>
//         <p class="p2">
//             - ${item.username || item.organization}
//         </p>
//         <p class="p3">
//             ${item.rating} <img src="assets/Images/black-star.png">
//         </p>
//     </div>`
//     })

//     document.getElementById("cards-wrapper").innerHTML = testerDataForHTML
// }

// displayTesterData()



function filterTesterData(rating) {
    let testerDataForHTML = ''

    const filteredTesterData = testerData.filter(function(data) {
        return data.rating === rating
    })

    console.log(filteredTesterData)

    if (filteredTesterData.length === 0) {
        testerDataForHTML = `<h3>No one rates on this amount of star yet</h3>`
    } else {
        filteredTesterData.forEach((data) => {
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
    }

    document.getElementById("cards-wrapper").innerHTML = testerDataForHTML
}