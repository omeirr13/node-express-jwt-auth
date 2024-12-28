const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    console.log("in required auth");
    const token = req.cookies.jwt;

    //check json webtoken exists and is valid
    if(!token){
        res.redirect("/auth/login");
    }
    jwt.verify(token, "omeirs secret", (err, decodedToken) => {
        if(err) {
            console.log(err.message);
            res.redirect("/auth/login");
        } else {
            console.log(decodedToken);
            next();
        }
    });
}

module.exports = requireAuth;