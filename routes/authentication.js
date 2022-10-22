const express = require('express');
const Info = require('../models/infoModel');

const router = express.Router();

// Post authentication
router.post('/', async (req, res) => {
    const {username, name, email, phone, city, dob, password} = req.body;
    try {
        const info = await Info.create({username, name, email, phone, city, dob, password});
        res.status(200).json(info);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const info = await Info.findOne({username, password});
        if (!info) {
            res.status(400).json({error: "not found"});
        } else {
            res.status(200).json(info);
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;