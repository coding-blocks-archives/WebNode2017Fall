function hello () {
    console.log("Hello")
}

function sayHello (helloFn) {
    helloFn();
}

sayHello(hello)

function createGreeter(name) {
    function greeter () {
        console.log("Hello " + name)
    }

    return greeter
}
let worldGreeter = createGreeter("World")
console.log(worldGreeter)
worldGreeter()
