function downloadFile(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("DATA DOWNLOADED" + url)
        }, 2000)
    })
}

function encrypt(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`{{{${data}}}}`)
        }, 1000)
    })

}

function saveFile(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`saved: ${data}`)
        }, 2000)
    })
}
Promise.all([1,2,3].map(i => downloadFile(i)))
    .then((results) => Promise.all(results.map(d => encrypt(d))))
    .then((encDataArr) => Promise.all(encDataArr.map(e => saveFile(e))))
    .then(savedResults => console.info(savedResults))
    .catch(e => console.error(e))
