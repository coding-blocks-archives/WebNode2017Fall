let arr = [0,1,2,3,4,5,6,7,8];

let sum = arr.reduce(function (accum, item, index, array) {
    console.log(index + ": " + accum)
    return accum + item
})

console.log(sum)

let fib = arr.reduce(function(accum, t, i, a) {

})