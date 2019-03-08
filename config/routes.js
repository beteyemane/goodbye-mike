const routes = require('express').Router()
const studentController = require('../controllers/students')

routes.get('/students', studentController.index)

module.exports = routes



// that copy paste job NO TIME 😭 😂
