const mysql = require('mysql');

const pool = mysql.createPool({
 host: "68.178.151.138",
 user: "admin",
 password: "admin",
 database: "seeworld_db",
});

pool.getConnection(function(err, connection) {
    // connected! (unless `err` is set)
    connection.release();
});

module.exports = pool;