const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    position: {
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

module.exports = mongoose.model('Teacher', teacherSchema);