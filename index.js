const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost/goodbye_mike')

app.use('/api', routes)

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))


// where do we write our nice comments :)
// in app.js 😇