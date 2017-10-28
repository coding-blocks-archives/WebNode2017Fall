var socket = io();
function play(instId) {
    socket.emit('play', {id: instId})
}

$(function () {
    var usernameBox = $('#username')
    var loginBtn = $('#login')
    var sendBtn = $('#send');
    var msgBox = $('#message');
    var chats = $('#chats');

    sendBtn.click(function () {
        socket.emit('msg', {
            message: msgBox.val()
        })
    })
    loginBtn.click(function () {
        socket.emit('login', {username: usernameBox.val()})
    })
    socket.on('logged_in', function () {
        $('#loginbox').css('display', 'none')
        $('#musicbox').css('display', 'block')
        $('#chatbox').css('display', 'block')
    })
    socket.on('msg', function(data) {
        chats.append(
            `<li>${data.sender} : ${data.message}</li>`
        )
    })
    socket.on('play', function (data) {
        var instrument = $('#a'+data.id)[0]
        instrument.play();
    })

})