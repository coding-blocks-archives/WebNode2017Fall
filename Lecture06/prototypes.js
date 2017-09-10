let a = {p: 10};
let b = Object.create(a);

console.log(b.p)
b.p++
console.log(b.p)
console.log(a.p)
