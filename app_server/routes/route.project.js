// routes/router.project.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/controller.project');

// Get all projects
router.get('/get_all', projectController.getAllProjects);

// Get a single project by ID
router.get('/getSingle/:id', projectController.getProjectById);

// Create a new project
router.post('/add', projectController.createProject);

// Update an existing project
router.put('/update/:id', projectController.updateProject);

// Delete a project
router.delete('/delete/:id', projectController.deleteProject);

// Block a service by ID
router.put('/block/:id', projectController.blockProject);

module.exports = router;


