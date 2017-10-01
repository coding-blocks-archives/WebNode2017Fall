

function downloadFile (url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (url.startsWith("http")) {
                resolve("downloaded-data");
            } else {
                reject(new Error("link to thik thak do"))
            }
        }, 3000)
    })
}

downloadFile("cb.lk/file.txt")
    .then(function (data) {
        console.info(data)
    })

