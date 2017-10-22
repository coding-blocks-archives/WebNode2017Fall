const route = require('express').Router();
const User = require('../db/models').models.User

route.post('/', (req, res) => {
    User.create({
        username: req.body.username
    }, {
        returning: true
    })
        .then(user => res.send(user))
        .catch(err => console.error(err))
})

exports.route = route;
