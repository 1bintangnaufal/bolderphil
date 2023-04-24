
class Testimonials {
    #image = ""
    #reviewText = ""
    
    constructor(image, reviewText) {
        this._image = image
        this._reviewText= reviewText
    }

    get forHTML() {
        return `<div class="cards">
        <img src=${this._image}>
        <p class="p1">
            "${this._reviewText}"
        </p>
        <p class="p2">- ${this.username || this.organization}</p>
    </div>`
    }
}

class usernameTestimonials extends Testimonials {
    #username = ""

    constructor(image, reviewText, username) {
        super(image, reviewText)
        this.#username = username
    }

    get username() {
        return this.#username
    }
}

class organizationTestimonials extends Testimonials {
    #organization = ""

    constructor(image, reviewText, organization) {
        super(image, reviewText)
        this.#organization = organization
    }

    get organization() {
        return this.#organization
    }
}

const first_testimonial = new usernameTestimonials ("assets/Images/soojin.jpg", "Becareful with my gaze, <br>I captive everyone.", "Soojin")

const second_testimonial = new usernameTestimonials ("assets/Images/miyeon.jpg", "Fairies and Goddesses envy me. <br> There, I said it.", "Miyeon")

const third_testimonial = new usernameTestimonials ("assets/Images/yuqi.jpg", "What is Senorita? <br>I don't know who made that song.", "Yuqi")

const fourth_testimonial = new organizationTestimonials ("assets/Images/gidle-hwaa.jpg", "We are the greatest <br>group of all time", "(G)I-DLE")

let data = [first_testimonial, second_testimonial, third_testimonial, fourth_testimonial]
let testimonialsForHTML = ""

for(let i = 0; i < data.length; i++) {
    testimonialsForHTML += data[i].forHTML
}

document.getElementById("cards-wrapper").innerHTML = testimonialsForHTML

// 2:57:41