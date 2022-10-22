const express = require('express');
const Info = require('../models/infoModel');

const router = express.Router();

// Get Projects
router.get('/:user', async (req, res) => {
    const { user } = req.params;
    const { projects } = await Info.findOne({username: user});
    if (projects.length === 0) {
        res.status(404).json({projects: "no projects found"});
    } else {
        res.status(200).json({projects: projects});
    }
});

// Post project
router.patch('/:user', async (req, res) => {
    const { user } = req.params;
    const { name, description, startDate, endDate, category } = req.body;
    const project = {
        name,
        description,
        startDate,
        endDate,
        category
    }
    const { projects } = await Info.findOne({username: user});
    projects.push(project);
    const updated = await Info.updateOne({username: user}, {projects: projects});
    res.status(200).json(updated);
});

module.exports = router;