// Set up MySQL connection.
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();


// Export connection for our ORM to use.
module.exports = connection;
// 