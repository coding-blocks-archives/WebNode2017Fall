const route = require('express').Router()
const users = require('../data/users')

route.get('/', (r,s) => s.render('signup'))

route.post('/', (req, res) => {
    users[req.body.username] = {
        username: req.body.username,
        password: req.body.password
    }
    res.redirect('/login')
})


exports = module.exports = {
    route
}