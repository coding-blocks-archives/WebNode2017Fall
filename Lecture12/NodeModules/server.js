const express = require('express')
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    console.info("Yay! We got a request")
    res.send(`<h1>Hello World</h1>`)
})

app.get('/show/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'form.html'))
})

app.get('/show/greet', (req, res) => {
    res.send(`Hello ${req.query.username}`)
})

app.listen(2345, () => {
    console.info("Server has started on http://localhost:2345/")
})