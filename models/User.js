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

userSchema.post('save', function (doc, next) {
    console.log("new user was created");
})

//fire a fucntion before document saved
userSchema.pre('save', function (next) {
    console.log("user about to be created", this);
    next();
})
//we are using a normal function, and not an arrow because we want to use the this keyword to refer to the instance of the user we are trying to create, we dont get _v in this, because we only get this after db creates that user.
const User = mongoose.model('user', userSchema);

module.exports = User;