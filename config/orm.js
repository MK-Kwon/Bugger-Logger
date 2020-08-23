// Import MySQL connection
const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
},

    insertOne: function(burgerName, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (? , false)";
        connection.query(queryString, [burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
},  

    updateOne: function(id, devoured, cb) {
        let queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"
        connection.query(queryString, [devoured, id], function(err, result){
            if(err) throw err;
            cb(result);
        });
},

    deleteOne: function(burgers, id, cb) {
        let queryString = "DELETE FROM burgers WHERE id = ?"
        connection.query(queryString, [burgers, id], function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;