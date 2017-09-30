
function downloadFile(url, downloaded) {
    setTimeout(() => {
        downloaded(null, "DATA DOWNLOADED")
    }, 2000)
}

function encrypt(data, encrypted) {
    setTimeout(() => {
        encrypted(null, `{{{${data}}}}`)
    }, 1000)
}

function saveFile(data, saved) {
    setTimeout(() => {
        saved(null, true)
    }, 2000)
}

downloadFile("http://cb.lk/file.jpg", (err, data) => {
    if (!err) {
        encrypt(data, (err2, encData) => {
            if (!err2) {
                saveFile(encData, (err3, saved) => {
                    if (!err3 && saved) {
                        console.info("dl'ed, enc'ed and saved")
                    }
                })
            }
        } )
    }
})