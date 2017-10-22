const MongoClient = require('mongodb').MongoClient;

const dbUri = 'mongodb://localhost:27017/exampledb'

MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    const todos = db.collection('todos')
    let todoitems = todos.find({
        $and: [
            {priority: {$lt: 4}},
            {priority: {$gt: 1}}
        ]
    })
    todoitems.toArray(function (err, items) {
        if (err) throw  err;

        console.log(items)
        db.close();
    })


})