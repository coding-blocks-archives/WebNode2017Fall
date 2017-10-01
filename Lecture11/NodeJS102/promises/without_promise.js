function downloadFile(url, downloaded) {
    setTimeout(() => {
        downloaded("downloaded")
    }, 3000) //faking a 3 sec download task
}

downloadFile("http://cb.lk/file.txt")

// Promis-ification of async function
function downloadFilePromise (url) {
    return new Promise(function (resolve, reject) {
        downloadFile(url, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}