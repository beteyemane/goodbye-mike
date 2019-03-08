const Student = require('../models/student')

function indexRoute(req, res) {
  Student
    .find()
    .then(students => res.status(200).json(students))
}

module.exports = {
  index: indexRoute
}
