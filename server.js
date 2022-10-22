require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.status);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({msg: 'backend is running'});
});

// db connection
app.listen(3000, () => {
    console.log('connected to db and running on PORT', 3000);
});