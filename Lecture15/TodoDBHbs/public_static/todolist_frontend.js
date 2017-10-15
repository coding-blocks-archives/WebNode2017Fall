$(function () {

    function refreshTodos (todos) {
        var list = $('#todolist')
        list.empty()
        for (todo of todos) {
            list.append(
                `<li>${todo.task}</li>`
            )
        }
    }

    $.get(
        'http://localhost:3333/api/',
        function (data) {
            refreshTodos(data)
        }
    )


    $('#addtodo').click(function () {
        $.post(
            'http://localhost:3333/api/add', //path
            {task: $('#task').val()}, //body
            function (data) {
                refreshTodos(data)
            }
        )
        $('#task').val("")
    })
})

