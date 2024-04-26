require('dotenv').config() // goi file env
// Get the client
const mysql = require('mysql2/promise');
// Create the connection to database
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
// // A simple SELECT query
// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//     console.log(">>>results   ",results); // results contains rows returned by server
//     console.log(">>>>>field   ",fields); // fields contains extra meta data about results, if available
//   }
// );

module.exports = connection;