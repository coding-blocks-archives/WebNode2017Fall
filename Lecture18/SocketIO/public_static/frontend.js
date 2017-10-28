var socket = io();

$(function () {
    var sendBtn = $('#send');
    var msgBox = $('#message');
    var chats = $('#chats');

    sendBtn.click(function () {
        socket.emit('msg', {
            message: msgBox.val()
        })
    })
    socket.on('msg', function(data) {
        chats.append(
            `<li>${data.sender} : ${data.message}</li>`
        )
    })

})