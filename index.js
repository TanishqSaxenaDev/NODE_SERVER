const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    // See the section on static files below for the recommended change
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
    console.log(req.body);
});

// Export the app for Vercel's serverless environment
module.exports = app;
