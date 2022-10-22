require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const project = require('./routes/projects');
const authentication = require('./routes/authentication');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({msg: 'backend is running'});
});
app.use('/project/', project);
app.use('/authentication', authentication);

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and running on PORT', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });