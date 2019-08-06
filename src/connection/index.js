const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'devuser',
        password: '12345',
        host: 'localhost',
        database: 'ujianbackend',
        port : 3306
    }
)

module.exports = conn
