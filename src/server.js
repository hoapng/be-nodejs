require("dotenv").config();

const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

const app = express(); // app express
const port = process.env.PORT || 8888;

// console.log(process.env.PORT)

//config fileupload
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);
app.use("/api/v1", apiRoutes);

(async () => {
  try {
    //using mongoose
    await connection();

    //using mongodb driver
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("customers");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connection DB", error);
  }
})();
