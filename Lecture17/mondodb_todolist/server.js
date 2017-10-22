const express = require('express')
const config = require('./config.json')
const bodyParser = require('body-parser')
const path = require('path')

const routes = {
    todos: require('./api/todos').route,
    users: require('./api/users').route
}

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/todos', routes.todos)
app.use('/users', routes.users)
app.use('/', express.static(path.join(__dirname, 'public_static')))


app.listen(config.SERVER.PORT, () => {
    console.log("Server started at http://localhost:" + config.SERVER.PORT)
})