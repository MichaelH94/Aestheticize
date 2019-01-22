// Require Mongoose for database manipulation
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// New Schema for Mongoose
let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true;
    }
    favMusic: {
        type: String,
        required: true
    },
    favMovie: {
        type: String,
        required: true
    },
    favGame: {
        type: String,
        required: true
    }
});

let User = mongoose.model("User", userSchema);

module.exports = User;