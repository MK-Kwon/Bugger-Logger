require('dotenv').config();
const express = require("express");
const exphds = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphds({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);
app.listen(PORT, function(){
    console.log("App is listening on: http://localhost:" + PORT);
});


