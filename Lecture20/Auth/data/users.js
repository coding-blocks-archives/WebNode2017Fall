const uid = require('uid')
const users = {}
const tokens = {}

exports = module.exports = {
    addUser(username, password) {
        users[username] = {username, password}
    },
    getUser(username) {
        return users[username]
    },
    getUserWithToken (token) {
      return users[tokens[token]]
    },
    createToken(username) {
        let token = uid(10)
        tokens[token] = username
        return token
    },
    removeToken(token) {
        delete tokens[token]
    }
}