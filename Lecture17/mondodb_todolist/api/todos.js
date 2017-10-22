const route = require('express').Router();
const Todo = require('../db/models').models.Todo

//Fetch all the todos
route.get('/', (req, res) => {
    Todo.findAll({})
        .then((todos) => res.send(todos))
        .catch((err) => console.error(err))
})

//Add a new todo
route.post('/', (req, res) => {
    Todo.create({
        task: req.body.task,
        done: false,
        userId: req.body.userId
    })
        .then((result) => res.redirect('.'))
        .catch((err) => console.error(err))
})

route.post('/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.status(404).send({
            message: "Todo not found"
        })
    }

    Todo.update({
        done: req.body.done,
        task: req.body.task
    }, {
        where: {
            id: req.params.id
        },
    })
        .then((result) => res.redirect('.'))
        .catch(err => console.error(err))
})

exports.route = route;