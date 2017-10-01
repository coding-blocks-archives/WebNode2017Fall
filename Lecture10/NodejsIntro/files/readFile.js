const fs = require('fs')

fs.readFile(__dirname + '/file.txt', function (err, data) {
    if (err)
        return console.error("File could not be read")

    console.info(data.toString())
})