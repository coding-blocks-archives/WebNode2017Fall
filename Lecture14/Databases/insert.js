const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'dbone',
    user: 'userone',
    password: 'passone'
});

function insertTodo(task, done) {
    conn.query(
        `INSERT INTO todos (task, done) VALUES ('${task}', ${done})`,
        (err, result, cols) => {
            if (err) throw err;

            console.log(result)
            console.log(cols)
        }
    )
}

insertTodo("another task", true);