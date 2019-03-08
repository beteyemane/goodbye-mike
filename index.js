const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()

mongoose.connect(`mongodb://localhost/${process.env.MONGODB_URI}`)

app.use('/api', routes)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.listen(process.env.PORT, () => console.log('We up on 4k! 🙌🏽'))


// where do we write our nice comments :)
// in app.js 😇
