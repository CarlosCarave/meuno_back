const mySql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123412341234',
    port: 3306,
    database: 'meuno'
});

connection.connect((err) => {
    console.log(err);
});