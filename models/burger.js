// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(id, devoured, cb){
        orm.updateOne(id, devoured, function(res){
            cb(res);
        });       
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;