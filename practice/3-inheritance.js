class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    getInfo() {
        return `the car is a ${this.make} ${this.model}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model)
        this.batteryCapacity = batteryCapacity
    }

    getInfo() {
        return `${super.getInfo()} powered with ${this.batteryCapacity} kWh of battery capacity`
    }
}

let myElectricCar = new ElectricCar("Tesla", "Model X", 98)
console.log(myElectricCar.getInfo())