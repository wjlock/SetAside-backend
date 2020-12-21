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
        type: Number,
        required: false
    },
    residence: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    investements: {
        investments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Investment'}]
    },
    blogpost: {
        blogpost: [{type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost'}]
    },
    comments: 
        [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    
});

module.exports = User = mongoose.model('User', userSchema);