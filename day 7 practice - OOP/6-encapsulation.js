class Car {
    constructor(brand, model) {
        this._brand = brand
        this._model = model
    }

    // getter

    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }

    // setter
    set brand(value) {
        if (value === "") {
            console.log("Brand can't be empty")
        }
        this._brand = value
    }
    set model(value) {
        if (value === "") {
            console.log("Model can't be empty")
        }
        this._model = value
    }
}

let myCar = new Car ("Tesla", "Model X")
myCar.brand = "Nissan"
myCar.model = "R 35"
console.log(myCar.brand)
console.log(myCar.model)

// myCar.Brand dan myCar.model di bawah let myCar menggantikan value. yang tadinya tesla model x jadi nissan r 35