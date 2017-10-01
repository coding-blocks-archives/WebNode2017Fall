console.info('lib run')
function sum (a, b) {return a + b}

console.info(sum(5,6))
console.info(exports === module.exports)

exports = module.exports = {
    sum: sum
}

console.log(exports === module.exports)