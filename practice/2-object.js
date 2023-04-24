class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    // make = "Jeep", model = "Rubicon"

    getInfo() {
        return `the car is a ${this.make} ${this.model}`
    }
}

// OBJECT

let myCar = new Car("Jeep", "Rubicon")
let yourCar = new Car("Nissan", "R 35")
console.log(myCar.getInfo())
console.log(yourCar.getInfo())
// the car is a Jeep Rubicon
// the car is a Nissan R 35