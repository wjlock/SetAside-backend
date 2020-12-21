const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const commentsSchema = new Schema({
    comments: {
        type: String,
        required: true
    }
});

module.exports = BlogPost = mongoose.model('Comment', commentsSchema);