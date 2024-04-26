
require('dotenv').config() // goi file env
const express = require('express')
// const path = require('path')
const configViewEngine = require('./config/viewEngine')
const apiRouter = require('./routes/api')
const webRouter = require('./routes/web')
const connection = require('./config/database')
const { env } = require('process')
// import { Express } from "express-serve-static-core"
const initApi = require('./routes/api')
const app = express() // app express
const port = process.env.PORT // port => hardcode
const hostname = process.env.HOST_NAME; // cau hinh env cho 

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

//init api route
app.use('/',initApi)

// khai bao route
app.use('/',webRouter);

// test connection

// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//     console.log(">>>results   ",results); // results contains rows returned by server
//     console.log(">>>>>field   ",fields); // fields contains extra meta data about results, if available
//   }
// );

// chay server
app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})




