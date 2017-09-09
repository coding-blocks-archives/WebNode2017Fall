
function createCounter() {
    let x= 0;
    function count () {
        return ++x;
    }
    return count;
}

let myCounter = createCounter();
let myCounter2 = createCounter();

console.log(myCounter())
console.log(myCounter())
console.log(myCounter2())
