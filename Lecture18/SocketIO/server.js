const express = require('express')
const http = require('http')
const socketio = require('socket.io')

//My express app
const app = express();
//The http server on which it runs
const server = http.Server(app)
//The socket.io server
const io = socketio(server)

io.on('connection', function (socket) {
    console.log("Socket created :" + socket.id)
    socket.on('msg', function (data) {
        io.emit('msg', {
            sender: socket.id,
            message: data.message
        })
    })
})

app.use('/', express.static(__dirname + "/public_static"))

server.listen(2323, () => {
    console.log("Server started at http://localhost:2323")
})