const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')

const event = new EventEmitter();

event.on('written', (fileNo) => {
    if (fileNo >= 4) return;

    console.info(`file ${fileNo} has been written`)
    let nextFileNo = fileNo + 1

    fs.writeFile(path.join(__dirname, `file${nextFileNo}.txt`),
        "This is some data to be written to file 1",
        () => {event.emit('written', nextFileNo)})
})

event.emit('written', 0)
