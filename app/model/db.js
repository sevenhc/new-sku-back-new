const mysql = require("mysql");
const dbConfig = require("../config/db.confiig");

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
connection.getConnection((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
});

function handleDisconnect() {
  connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
    connection.on("error", function (err) {
      console.log("db error", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        // Connection to the MySQL server is usually
        handleDisconnect(); // lost due to either server restart, or a
      } else {
        // connnection idle timeout (the wait_timeout
        throw err; // server variable configures this)
      }
    });
  });
 
}

module.exports = connection;
