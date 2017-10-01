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

async function getFile () {
    try {
        let dlData = await downloadFile("1")
        console.info(dlData)

        let encData = await encrypt(dlData)
        console.info(encData)

        let savedFile = await saveFile(encData)
        console.info(savedFile)
    } catch (e) {
        // reject() calls will land here
    }


}

getFile()
console.info('are we done yet ?')