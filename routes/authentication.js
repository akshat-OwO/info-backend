const express = require('express');

const router = express.Router();

// Post authentication
router.post('/', (req, res) => {
    res.status(200).json({msg: "user signed in"});
});

module.exports = router;