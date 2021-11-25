const mongoose = require('mongoose');

const studentchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    hall: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    joined: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Student', studentchema);