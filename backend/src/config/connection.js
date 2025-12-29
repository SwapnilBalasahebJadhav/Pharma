const mysql = require("mysql2");
require("dotenv").config();

console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("DB:", process.env.DB);
console.log("PORT:", process.env.DB_PORT);

const connection = mysql.createPool({
  host: process.env.DB_HOST,       
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: Number(process.env.DB_PORT), 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;
