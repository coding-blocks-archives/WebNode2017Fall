const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("views", "views")
app.set("view engine", "hbs")

app.use('/', require('./routes/pages').route)
app.use('/login', require('./routes/login').route)
app.use('/signup', require('./routes/signup').route)
app.use('/logout', require('./routes/logout').route)

app.listen(3434, () => {
    console.log("Server started at http://localhost:3434")
})