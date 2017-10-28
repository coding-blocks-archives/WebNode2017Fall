const express = require('express')
const http = require('http')
const socketio = require('socket.io')

//My express app
const app = express();
//The http server on which it runs
const server = http.Server(app)
//The socket.io server
const io = socketio(server)

const users = {}

const PORT = process.env.PORT || 2323;

io.on('connection', function (socket) {
    console.log("Socket created :" + socket.id)
    socket.on('msg', function (data) {
        socket.broadcast.emit('msg', {
            sender: users[socket.id],
            message: data.message
        })
    })
    socket.on('login', function (data) {
        users[socket.id] = data.username
        socket.emit('logged_in')
    })
    // socket.on('play', function(data) {
    //     io.emit('play', data)
    // })
})

app.use('/', express.static(__dirname + "/public_static"))

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})