const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123412341234',
    port: 3306,
    database: 'meuno'
});

global.db = pool;

