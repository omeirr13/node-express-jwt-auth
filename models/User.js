const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


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
    next();
})

//fire a fucntion before document saved
userSchema.pre('save', async function (next) {
    console.log("user about to be created", this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//we are using a normal function, and not an arrow because we want to use the this keyword to refer to the instance of the user we are trying to create, we dont get _v in this, because we only get this after db creates that user.


//how password hashing works:
//1: run password through hashing algorihtm, it takes text password and generates a longer seemingly random string, so its already a bit secure, but hackers can reverse engineer simple hashed password.
//2: another way is to generate a salt, attach it to the password before its hashed..
//salt is a string of characters separate from the password itself, so end result is a hashed password and salt combination which is then stored in the database.


//when a user later tries to login, we take the password add the salt to the password, hash it with same hashing algorithm, and then compare it with hashed password stored in db, genereated at signup, if they match its correct password.
const User = mongoose.model('user', userSchema);

module.exports = User;