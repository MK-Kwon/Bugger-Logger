// Set up MySQL connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "locatlhost",
    user: "root",
    password: "",
    PORT: 3306,
    database: "burgers_db"
}),

connection.connect(function(err){
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;