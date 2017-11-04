const route = require('express').Router()
const cp = require('../utils/cookieparser')
const users = require('../data/users')

route.get('/', (req, res) => {
    let loginCookie = cp.getCookie(req.header('Cookie'), 'login')
    users.removeToken(loginCookie)
    return res.redirect('/login')
})

exports = module.exports = {
    route
}