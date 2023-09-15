require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
// get the client
const mysql = require('mysql2');

const app = express()// app express
const port = process.env.PORT || 8888

console.log(process.env.PORT)

//config template engine
configViewEngine(app)

//khai báo route
app.use('/', webRoutes)

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    password: '123456',
    port: 3307
});

// simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log("results", results); // results contains rows returned by server
        console.log("fields", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})