const mysql2 = require("mysql2")
const { DB_HOST,
    DB_USER,
    DB_PORT,
    DB_PASSWORD,
    DATABASE } = process.env

const connection = mysql2.createConnection(
    {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DATABASE
    }
)

module.exports = connection;