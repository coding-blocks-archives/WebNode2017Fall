const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const routes = {
    students: require('./routes/students').route,
    teachers: require('./routes/teachers').route
}

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"))
app.set("myprop", "myval")
app.get("myprop") // -> "myval"

app.use('/teachers', routes.teachers)
app.use('/students', routes.students)

app.use((req, res, next) => {
    res.status(404).render('error', {path: req.originalUrl})
})

app.listen(5454, () => {
    console.log("Server started at http://localhost:5454")
})