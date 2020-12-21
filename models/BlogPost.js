const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const blogPostSchema = new Schema({
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = BlogPost = mongoose.model('BlogPost', blogPostSchema);