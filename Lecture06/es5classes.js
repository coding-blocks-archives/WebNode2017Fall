function Vehicle (color, seats) {
    this.color = color;
    this.seats = seats;
    let wheels = 2;
    this.getWheels = function () {
        return wheels
    }
    this.setWheels = function (wh) {
        wheels = wh
    }
    this.canAccomodate = function (people) {
        return people <= seats;
    }
}

let bike = new Vehicle('black', 2)
let car = new Vehicle('red', 4)

console.log(bike.canAccomodate(3))
console.log(car.canAccomodate(3))
console.log(bike.wheels) //undefined
console.log(bike.getWheels())
car.setWheels(4)
console.log(car.getWheels())