console.info('main run')
const lib = require('./lib')
const lib2= require('./lib2')
console.info('lib imported')

console.info(lib.sum(3,4))
console.info(lib2.pubVar)
console.info(lib2.pubFun())
