const express = require('express');
const { register, login } = require('../controllers/infoController');

const router = express.Router();

// register
router.post('/', register);

// login
router.post('/login', login);

module.exports = router;