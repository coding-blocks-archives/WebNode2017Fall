const express = require('express')
    , app = express()

const routes = {
    students: require('./routes/students').route,
    teachers: require('./routes/teachers').route
}

app.get('/', (r, s) => s.send('Hello'))

app.use('/students', routes.students)
app.use('/teachers', routes.teachers)

app.listen(3333, () => console.log('http://localhost:3333/'))