const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,//we cant do a custom message for that, we have to look for info about error in error code
        lowercase: true,
        validate: [isEmail, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6"]
    }
});


const User = mongoose.model('user', userSchema);

module.exports = User;