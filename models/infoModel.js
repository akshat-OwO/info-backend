const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    projects: [
        {
            projectName: String,
            description: String,
            startDate: Date,
            endDate: Date,
            category: String
        }
    ]
});

module.exports = mongoose.model('info', infoSchema);