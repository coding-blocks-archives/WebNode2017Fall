const route = require('express').Router()
const users = require('../data/users')

route.get('/', (r,s) => s.render('login'))

route.post('/', (req, res) =>{
    let user = users[req.body.username]
    if (!user) {
        return res.redirect('/login')
    }
    res.header('Set-Cookie', `login=${user.username}`)
    res.redirect('/secret')
})

exports = module.exports = {
    route
}