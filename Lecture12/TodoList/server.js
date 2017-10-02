const express = require('express')
    , path = require('path')
    , app = express()

let todos = []

app.get('/', (req, res) => res.send('Hello'))

app.use('/todos', express.static(path.join(__dirname, 'public_html')))

app.get('/addtodo', (req, res) => {
    todos.push(req.query.newtodo)
    res.redirect('/showtodos')
})

app.get('/showtodos', (req, res) => {
    res.send(
`<form action="/addtodo" method="get">
    <input name="newtodo" type="text">
    <input type="submit">
</form>` +
        "<ul><li>" +
        todos.join("</li><li>") +
        "</li></ul>"
    )
})

global.x = 20;
require('./public_html/lib.js')

app.listen(2222, () => console.info('http://localhost:2222/'))