require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()// app express
const port = process.env.PORT || 8888

// console.log(process.env.PORT)

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config template engine
configViewEngine(app)

//khai báo route
app.use('/', webRoutes)

// simple query
// connection.query(
//     'SELECT * FROM Users',
//     function (err, results, fields) {
//         // console.log("results", results); // results contains rows returned by server
//     }
// );

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})