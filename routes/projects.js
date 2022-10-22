const express = require('express');

const router = express.Router();

// Get Projects
router.get('/:user', (req, res) => {
    res.status(200).json({msg: 'projects of user'});
});

// Post project
router.post('/:user', (req, res) => {
    res.status(200).json({msg: 'project posted by user'});
});

module.exports = router;