// models/project.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Project Schema
const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 80
  },
  detailedDescription: {
    type: String,
    required: true
  },
 
  coverImage: {
    type: String, // URL or path to the image
    required: true
  },
  
  blocked: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
