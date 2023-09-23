require('dotenv').config()
const express = require('express')

const connectToDb = require('./config/db.js')
const{home} = require('./controllers/userController.js')

const app = express()


app.get('/',home)

module.exports = app
