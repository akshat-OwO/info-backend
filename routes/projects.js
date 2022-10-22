const express = require('express');
const { getProjects, postProject } = require('../controllers/infoController');

const router = express.Router();

// Get Projects
router.get('/:user', getProjects);

// Post project
router.patch('/:user', postProject);

module.exports = router;