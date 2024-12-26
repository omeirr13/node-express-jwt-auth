const express = require('express');
const authRoutes = require("./routes/authRoutes");

module.exports = async (app) => {
    app.use(express.static('public'));//this is so we can serve static files via css to the browser
    app.use(express.json());//it takes any json data that comes along with request, parses into a javascript object so we can use it inside code, and attaches that object to request object so we can access with request handler
    
    app.set('view engine', 'ejs');

    //routes
    app.get('/', (req, res) => res.render("home"))
    app.get('/smoothies', (req, res) => res.render("smoothies"))

    app.use('/auth', authRoutes);

};