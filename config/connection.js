// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection({

        host:'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user:"eixmxjn54wzet91n",
        password:'zcwx3gr9t71ws45n',
        database:"burger_db"});
}
else{
    connection = mysql.createConnection({
        host:'localhost',
        user:"newuser",
        password:'1234',
        database:"burger_db"      
    });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.end();
// Export connection for our ORM to use.
module.exports = connection;
// 