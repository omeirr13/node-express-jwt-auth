const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
    console.log("in required auth");
    const token = req.cookies.jwt;

    //check json webtoken exists and is valid
    if (!token) {
        res.redirect("/auth/login");
    }
    jwt.verify(token, "omeirs secret", (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            res.redirect("/auth/login");
        } else {
            console.log(decodedToken);
            next();
        }
    });
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    res.locals.user = null;
    console.log("ok", res.locals.user, token);
    if (!token) {
        next();
    }
    jwt.verify(token, "omeirs secret", async (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            next();
        }
        console.log(decodedToken);
        const id = decodedToken?.id
        const user = await User.findById(id);
        res.locals.user = user;//inject data into the view
        next();
    })

}

module.exports = {requireAuth, checkUser};