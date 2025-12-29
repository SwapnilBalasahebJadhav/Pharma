const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Swapnil@2002",
  database: "figma",
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = connection;
