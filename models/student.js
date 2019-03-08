const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  comment: { type: String, required: true },
  linkedin: { type: String, required: true }
})

module.exports = mongoose.model('Student', studentSchema)
