const route = require('express').Router()
const users = require('../data/users')
const cp = require('../utils/cookieparser')

route.get('/', (req, res) => {
    res.render('guest', {})
})

route.get('/secret', (req, res) => {

    if (req.user) {
        return res.render('secret', {
            user: req.user.username
        })
    }
    res.send("Not authorized")
})
route.get('/password', (req, res) => {
    if (req.user) {
        return res.render('secret', {
            user: req.user.password
        })
    }
    res.send("Not authorized")
})

exports = module.exports = {
    route
}