//var a = true;

let intervalId = setInterval(() => {
    console.log('a')
}, 0)
setTimeout(() => {
    clearInterval(intervalId)
}, 100)
