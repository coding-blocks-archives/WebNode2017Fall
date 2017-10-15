const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/todos', (req, res, next) => {
    req.m1 = "hello"
    res.send("world")
})
app.use((req, res, next) => {
    req.m2 = "hello"
    next();
})


app.use('/', express.static(path.join(__dirname, 'frontend')));

app.post('/todos/add', (req, res) => {
    console.log(req)
    console.log(req.body.newtodo)
})


app.listen(5454, () => console.log("Server started"));