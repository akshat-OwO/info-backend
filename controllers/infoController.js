const Info = require('../models/infoModel');
const mongoose = require('mongoose');

const register = async (req, res) => {
    const {username, name, email, phone, city, dob, password} = req.body;
    try {
        const info = await Info.create({username, name, email, phone, city, dob, password});
        res.status(200).json(info);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const login = async (req, res) => {
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
}

const getProjects = async (req, res) => {
    const { user } = req.params;
    const { projects } = await Info.findOne({username: user});
    if (projects.length === 0) {
        res.status(404).json({projects: "no projects found"});
    } else {
        res.status(200).json({projects: projects});
    }
}

const postProject = async (req, res) => {
    const { user } = req.params;
    const { projectName, description, startDate, endDate, category } = req.body;
    const project = {
        projectName,
        description,
        startDate,
        endDate,
        category
    }
    const { projects } = await Info.findOne({username: user});
    projects.push(project);
    const updated = await Info.updateOne({username: user}, {projects: projects});
    res.status(200).json(updated);
}

module.exports = {
    register,
    login,
    getProjects,
    postProject
}