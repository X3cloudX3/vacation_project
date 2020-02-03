const mysql2 = require("mysql2/promise")
const { DB_HOST,
    DB_USER,
    DB_PORT,
    DB_PASSWORD,
    DATABASE } = process.env

const pool = mysql2.createPool(
    {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0

    }
)

module.exports = pool