const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentsInfo = Schema({
    surname: {
        type: String,
        required: true
    },
    othername: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true });

const studentInfo = mongoose.model('studentInfo', studentsInfo);

module.exports = studentInfo;