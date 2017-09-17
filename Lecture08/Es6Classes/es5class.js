function Person (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello ${this.name}`
    }
}
Person.prototype.getFirstName  = function () {
    return this.name.split(" ")[0]
}

let p = new Person("John Doe", 40);
console.log(p)
console.log(p.getFirstName())