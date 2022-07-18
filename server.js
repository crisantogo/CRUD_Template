//--REQUIRE DEPENDENCIES--

const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//--DECLARE VARIABLES

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix', //name taken from sample database created on MongoDB
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db= client.db(dbName)
        collection= db.collection('comments') //'comments' collection name taken from sample database
    })
//--MIDDLEWARE--

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', async(req,res)=>{
    try{
        response.render('index.ejs')
        }catch(error){
            response.status(500).send({message: error.message})

    }
})

//--CREATE PORT--

app.listen(process.env.PORT||PORT, ()=>{
    console.log(`Server is running on port = ${process.env.PORT}`)
})