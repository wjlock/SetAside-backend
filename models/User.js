const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    phone: {
        type: Number,
        required: false
    },
    income: {
        type: Number,
        required: false
    },
    savings: {
        type: Number,
        required: false
    },
    current_account_status: {
        type: number,
        required: false
    },
    residence: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('User', userSchema);