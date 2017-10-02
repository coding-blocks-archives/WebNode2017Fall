const express = require('express')
    , route = express.Router()

let teachers = [
    'Prateek',
    'Sumeet',
    'Rishab'
]

route.get('/', (req, res) => res.send(teachers))

route.get('/add', (req, res) => {
    teachers.push(req.query.name)
    res.redirect('.')
})

//route.use('/xyz', /*another route here*/)

exports.route = route;