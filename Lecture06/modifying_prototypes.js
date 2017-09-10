String.prototype.somefun = function () {
    console.log(this)
}

Array.prototype.filterNums = function () {
    return this.filter( i => (typeof i == 'number'))
}



let str = "jakhviahb";

let arr = [1, "ASd", true, 3, {a:10}]

console.log(arr.filterNums()) // [1,3]