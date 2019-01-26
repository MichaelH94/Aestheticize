// Require Mongoose for database manipulation
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
let Schema = mongoose.Schema;

// New Schema for Mongoose
let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
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

// userSchema.methods = {
//     checkPassword: function (inputPassword) {
//         return bcrypt.compareSync(inputPassword, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     }
// }

// userSchema.pre('save', function(next) {
//     if(!this.password) {
//         console.log('No Password Provided @ user.js');
//     } else {
//         console.log('Hashed Password in pre-save');
//         this.password = thishashPassword(this.password)
//         next();
//     }
// })

let User = mongoose.model("User", userSchema);

module.exports = User;