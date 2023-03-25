const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: String,
    description: String,
    username: String,

}, { timestamps: true })

const Notes = mongoose.model('notes', notesSchema)

module.exports = Notes