const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')


const routes = {
    todos: require('./routes/todos').route,
    api: require('./routes/todoapi').route
}
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

app.use('/todos', routes.todos)
app.use('/api', routes.api)
app.use('/', express.static(path.join(__dirname, "public_static")))

app.listen(3333, () => {
    console.log("Server started at http://localhost:3333")
})