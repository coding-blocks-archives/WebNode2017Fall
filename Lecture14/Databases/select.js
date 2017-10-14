const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'dbone',
    user: 'userone',
    password: 'passone'
});

conn.query(
    `SELECT * FROM todos`,
    (err, rows, cols) => {
        if (err) throw err;
        
        console.log(rows)
        console.log(cols)
    }
)