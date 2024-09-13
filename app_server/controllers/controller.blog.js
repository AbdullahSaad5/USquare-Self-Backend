// var blog =require('../models/model.blog.js');

// // Get All blog
// module.exports.getAllBlogs = (callback) =>  {
// 	blog.find({state: { $ne: 'deleted' }},callback)
// 	.sort({date_time: -1});
// }

// // Get Top 3 Recent
// module.exports.getTop3Blogs = (callback) =>  {
// 	blog.find({state: { $ne: 'deleted' }},callback)
// 	.sort({date_time: -1})
// 	.limit(3)
// }

// // Get blog by id
// module.exports.getBlogById = (id, callback) =>  {
// 	blog.find({_id: id, state: { $ne: 'deleted' }},callback);
// }

// // Add blog
// module.exports.addBlog = async (blogForm, callback) => {
// 	blog.create(blogForm, callback);
// }

// // Update blog
// module.exports.updateBlog = async (blogId, blogForm, options, callback) => {
// 	var query = {_id: blogId};
// 	blog.findOneAndUpdate(query, blogForm, options, callback);
// }

// // Delete blog   
// module.exports.removeByid = (id, callback) => {
//     var query = {_id: id};
//     blog.remove(query, callback)
// }




// controllers/blog.controller.js
const Blog = require('../models/model.blog');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ success: true, message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, message: 'Blog updated successfully', blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Block or unblock a blog
exports.blockBlog = async (req, res) => {
  console.log('Block blog endpoint hit'); // Check if this is printed in your server console
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      console.log('Blog not found');
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.blocked = !blog.blocked; // Toggle the blocked status
    await blog.save();

    res.status(200).json({ success: true, message: `Blog ${blog.blocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    console.error('Error updating blog status:', error);
    res.status(500).json({ success: false, message: 'Error updating blog status', error });
  }
};
