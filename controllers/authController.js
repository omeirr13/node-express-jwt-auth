const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    //validation errors
    if (err.code === 11000) {
        errors.email = "That email is already registered.";
    }
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

exports.signup_get = (req, res) => {
    res.render("signup");
}

exports.login_get = (req, res) => {
    res.render("login");
}

exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });//create instance locally in memory
        res.status(201).json({ success: true, user });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ success: false, errors })
    }
}

exports.login_post = (req, res) => {
    res.send("new login");
}