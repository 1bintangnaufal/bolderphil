class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    getInfo() {
        return `the car is a $(this.make) $(this.model)`
    }
}