const express = require('express')
    , route = express.Router()

let students = [
    'Aakash',
    'Shreya',
    'Madhav'
]

route.get('/', (req, res) => res.send(students))

route.get('/add', (req, res) => {
    students.push(req.query.name)
    res.redirect('.')
})

exports.route = route;