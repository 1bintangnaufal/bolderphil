function hamburgerReveal() {
    let hamburger = document.getElementById("hamburger-reveal");
    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}