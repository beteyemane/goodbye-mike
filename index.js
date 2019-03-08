require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const config = require('./config/environment.js')

const app = express()

const uri = config.dbURI
console.log(uri)
mongoose.connect(uri)
app.use('/api', routes)

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.listen(process.env.PORT, () => console.log('We up on 4k! 🙌🏽'))


// where do we write our nice comments :)
// in app.js 😇
