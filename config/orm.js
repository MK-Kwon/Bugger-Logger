// Import MySQL connection
const connection = require("../config/connection.js");

const orm = {

    selectAll: function(cb) {
        console.log("selectAll function");
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
},

    insertOne: function(burgerName, cb) {
        console.log("insertOne function");
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}" , false)`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
},  

    updateOne: function(id, devoured, cb) {
        console.log("updateOne function");
        let queryString = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${id}`;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
},

    deleteOne: function(burgers, id, cb) {
        let queryString = `DELETE FROM burgers WHERE id = ${id}`;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;