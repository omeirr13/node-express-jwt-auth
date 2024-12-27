const express = require('express');
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");


module.exports = async (app) => {
    app.use(express.static('public'));//this is so we can serve static files via css to the browser
    app.use(express.json());//it takes any json data that comes along with request, parses into a javascript object so we can use it inside code, and attaches that object to request object so we can access with request handler
    app.use(cookieParser());

    app.set('view engine', 'ejs');

    //routes
    app.get('/', (req, res) => res.render("home"))
    app.get('/smoothies', (req, res) => res.render("smoothies"))

    app.use('/auth', authRoutes);


    //cookies
    app.get('/set-cookies', (req, res) => {
        // res.setHeader('Set-Cookie', 'newUser=true');
        res.cookie('newUser', false);
        res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true });    
        res.send('<h1>you got the cookies</h1>');
    })

    app.get('/read-cookies', (req, res) => {
        const cookies = req.cookies;
        console.log(cookies);
        console.log(cookies.newUser ? 'ok' : 'no');
        res.json(cookies);
    })
};