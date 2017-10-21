$(() => {
    $('#login').click(() => {
        let username = $('#user').val();
        $.post('/users', {
            username: username
        }, (data) => {
            localStorage.setItem('username', username)
            localStorage.setItem('userid', data.id)
            window.location = '/todolist.html'
        })

    })
})