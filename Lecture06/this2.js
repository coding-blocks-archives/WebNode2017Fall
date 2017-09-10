function alpha () {
    this.a = 10
}
// alpha()
// console.log(window)

let obj = {
    p: 10,
    q: 20,
    r: function () {
        console.log(this)
        alpha()
    }
}

obj.r()
console.log(obj.a)
console.log(a)
let x = obj.r;
// x();

let obj2 = {
    a: 10,
    b: 20,
    c: x
}

obj2.c();
