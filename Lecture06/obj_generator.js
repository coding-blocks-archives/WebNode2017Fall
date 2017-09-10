function createPerson(name, age) {
    return {
        name: name,
        age: age,
        isAdult: function () {
            return (age > 18)
        }
    }
}

let p1 = createPerson("Joe", 22);
console.log(p1.isAdult())
delete p1.name;
console.log(p1)