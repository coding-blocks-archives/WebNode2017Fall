const MongoClient = require('mongodb').MongoClient
const DB = require('../config.json').DB

let todoCollection = null;

MongoClient.connect(DB.URI, function (err, db) {
    if (err) throw  err;

    todoCollection = db.collection('todos')
})

const Todo = {
    create: function (todoObj) {
        return new Promise(function (resolve, reject) {
            todoCollection.insertOne(todoObj, function (err, result) {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },
    findAll: function (whereArgs) {
        return new Promise(function (resolve, reject) {
            todoCollection.find(whereArgs).toArray(function (err, result) {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    }
}

const User = {

}

exports.models = {
    Todo, User
}

