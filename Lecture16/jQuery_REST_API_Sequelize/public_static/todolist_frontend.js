
function getAllTodos (cb) {
    $.get('/todos/', (data) => {
        cb(data);
    })
}

function addNewTodo (task, cb) {
    $.post('/todos/', {
        task: task,
        userId: localStorage.getItem('userid')
    }, (data) => {
        cb(data);
    })
}

function setTodoDone(todoId, done, cb) {
    $.post(`/todos/${todoId}`, {
        done: done
    }, (todos) => {
        cb(todos)
    })
}

$(function () {
    let newTaskBox = $('#newtask')
    let addTaskBtn = $('#addtask')
    let todolistDiv = $('#todolist')
    let inputCheckBox = $('input.todo-done')
    console.log(inputCheckBox)


    function refreshTodoList (todos) {
        todolistDiv.empty();
        for (todo of todos) {
            let checkBox = $(`<input  data-todoid="${todo.id}" onchange="setDone(this)" type="checkbox" class="col todo-done">`)
            if (todo.done) {
                checkBox.prop('checked', true)
            }
            let newTodoItem = $(`
            <div class="todoitem row col-12">
                <div class="col"></div>
                <div class="col-10">${todo.task}</div>
            </div>`
            );
            newTodoItem.prepend(checkBox)
            todolistDiv.prepend(newTodoItem)
        }
    }

    window.setDone = function (el) {
        let todoId = $(el).attr('data-todoid')
        console.log(todoId)
        if(el.checked) {
            setTodoDone(todoId, true, refreshTodoList)
        } else {
            setTodoDone(todoId, false, refreshTodoList)
        }
    }

    getAllTodos((todos) => refreshTodoList(todos))

    addTaskBtn.click(() => {
        addNewTodo(newTaskBox.val(), (todos) => refreshTodoList(todos))
    })
})