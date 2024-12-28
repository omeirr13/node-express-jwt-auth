const User = require('../models/User');
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    //validation errors
    if (err.code === 11000) {
        errors.email = "That email is already registered.";
    }
    else if (err.message === "incorrect email") {
        errors.email = "That email is not registered";
    }
    else if (err.message === "incorrect password") {
        errors.password = "That password is not correct";
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

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'omeirs secret', {
        expiresIn: maxAge
    });
}
exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        //pre middleware will run to hashpassword before create will run
        const user = await User.create({ email, password });//create instance locally in memory
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });

    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ success: false, errors })
    }
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookies('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });

    } catch (err) {
        const errors = handleErrors(err);
        return res.status(400).json({ success: false, errors });
    }
}