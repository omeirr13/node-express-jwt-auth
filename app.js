require('dotenv').config();

const express = require('express');
const expressApp = require('./express-app');
const dbConnect = require('./db-connect');

const startServer = async() => {
    const app = express();
    await expressApp(app);
    await dbConnect();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log("connected to port", PORT)
    });
}

startServer();

