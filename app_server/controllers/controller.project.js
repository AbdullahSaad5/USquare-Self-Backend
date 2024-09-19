
const { validationResult } = require('express-validator');

const Project = require('../models/model.project');



// Create a new project
exports.createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project. Please try again later.' });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects. Please try again later.' });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('category');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project. Please try again later.' });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project. Please try again later.' });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project. Please try again later.' });
  }
};



// Block or unblock a project
exports.blockProject = async (req, res) => {
  console.log('Block project endpoint hit'); // Check if this is printed in your server console
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);

    if (!project) {
      console.log('Project not found');
      return res.status(404).json({ message: 'Project not found' });
    }

    project.blocked = !project.blocked; // Toggle the blocked status
    await project.save();

    res.status(200).json({ success: true, message: `Project ${project.blocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    console.error('Error updating project status:', error);
    res.status(500).json({ success: false, message: 'Error updating project status', error });
  }
};
