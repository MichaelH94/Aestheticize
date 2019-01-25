// Require Mongoose for database manipulation
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// New Schema for Mongoose
let postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String
    }
});

let Post = mongoose.model("Post", postSchema);

module.exports = Post;