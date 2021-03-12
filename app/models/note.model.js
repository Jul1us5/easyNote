const mongoose = require('mongoose');
const { array } = require('yup');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    about: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);