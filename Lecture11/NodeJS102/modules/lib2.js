let privVar = 10
let pubVar = 12

function pubFun() {
    return privVar
}

exports = module.exports  = {
    pubVar, pubFun
}