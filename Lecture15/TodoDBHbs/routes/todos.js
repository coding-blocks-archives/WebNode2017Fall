const route = require('express').Router()
const todos = require('../db/todotable')

route.get('/', (req, res) => {
    todos.getTodos((todolist) => {
        res.render('todos', {todolist})
    })
})

route.post('/add', (req, res) => {
    todos.addTodo(req.body.task, () => {
        res.redirect('.')
    })
})

exports.route = route;