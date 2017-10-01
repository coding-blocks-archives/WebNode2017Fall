const fs = require("fs")

fs.writeFile(
    __dirname + '/file.txt', //file path
    "Hello there ! This an awesome file", //data to write
    function () { //callback
        console.info("Yo, file was written")
    }
)
//fs.writeFileSync(path, data)

// fs.writeFile(
//     __dirname + '/website.html',
//     `<html>
//     <body>
//     <h1>This is a great website</h1>
//     </body>
//     </html>
//     `,
//     function () {
//         console.info('Yay we made a website')
//     }
// )
