const MongoClient = require('mongodb').MongoClient;

const dbUri = 'mongodb://localhost:27017/exampledb'

MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    const todos = db.collection('todos')

    todos.insertMany([
        // {
        //     task: 'other task',
        //     done: false
        // },
        // {
        //     task: 'one more task',
        //     done: true
        // }
        {
            task: "important task",
            priority: 1,
            done: false
        },
        {
            task: "unnecessary task",
            priority: 4,
            done: false
        },
        {
            task: "necessary task",
            priority: 2,
            done: false
        }
    ], function (err, result) {
        if (err) throw  err;

        console.log(result)
        db.close();
    })
})