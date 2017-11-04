const route = require('express').Router()
const users = require('../data/users')
const cp = require('../utils/cookieparser')

route.get('/', (req, res) => {
    res.render('guest', {})
})

route.get('/secret', (req, res) => {
    // TODO: make sure user is logged in
    // res.render('secret', {user: <put username here>})
    let loginCookie = cp.getCookie(req.header('Cookie'), 'login')
    let user = users.getUserWithToken(loginCookie)
    if (user) {
        return res.render('secret', {
            user: user.username
        })
    }
    res.send("Not authorized")
})

exports = module.exports = {
    route
}