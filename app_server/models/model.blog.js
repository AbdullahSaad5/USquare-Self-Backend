// models/blog.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Blog Schema
const blogSchema = new Schema({
  blogTitle: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 70
  },
  blogDescription: {
    type: String,
    required: true
  },
  blogData: {
    type: String,
    required: true
  },
  blogImage: {
    type: String, // URL or path to the image
    required: true
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
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
