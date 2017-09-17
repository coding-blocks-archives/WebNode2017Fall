class Person {
    constructor (name, age) {
        this._name = name;
        this.nick = name.split(" ")[0].toLowerCase();
        this.age = age;
        this.greet = function () {
            return `Hello ${_name}`
        }
    }
    get lastname () {
        return _name.split(" ")[1]
    }
    get name () {return this._name}
    set name (val) {
        this._name = val;
        this.nick = val.split(" ")[0].toLowerCase();
    }


    // getFirstName () {
    //     return this.name.split(" ")[0]
    // }
}

let p = new Person("John Doe", 40);
console.log(p)
// console.log(p.getFirstName())
console.log(p.lastname)