//--REQUIRE DEPENDENCIES--

const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//--DECLARE VARIABLES

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db= client.db(dbName)
        collection= db.collection('comments')
    })

//--CREATE PORT--

app.listen(process.env.PORT||PORT, ()=>{
    console.log(`Server is running on port = ${process.env.PORT}`)
})