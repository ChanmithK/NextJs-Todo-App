const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "db",
  user: "root",
  password: "Praveen123",
  database: "todo_db",
});

module.exports = pool;
