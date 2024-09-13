// var category =require('../models/model.category.js');

// // Get All Category
// module.exports.getAllCategory = (callback) =>  {
// 	category.find({state: { $ne: 'deleted' } },callback)
// 	.sort({date_time: -1});
// }

// // Add Category
// module.exports.addCategory = async (categoryForm, callback) => {
// 	category.create(categoryForm, callback)
// }

// // Update Category
// module.exports.updateCategory = async (categoryId, categoryForm, options, callback) => {
// 	var query = {_id: categoryId};
// 	category.findOneAndUpdate(query, categoryForm, options, callback);
// }



// // Delete category   
// module.exports.removeByid = (id, callback) => {
//     var query = {_id: id};
//     category.remove(query, callback)
// }










const JobCategory = require('../models/model.category');

// Add a new job category
exports.addJobCategory = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new job category
    const newJobCategory = await JobCategory.create({ title, description });

    res.status(201).json({
      success: true,
      message: 'Job category added successfully',
      data: newJobCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error adding job category',
      error: error.message,
    });
  }
};

// Update an existing job category
exports.updateJobCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Find and update the job category
    const updatedJobCategory = await JobCategory.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!updatedJobCategory) {
      return res.status(404).json({
        success: false,
        message: 'Job category not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Job category updated successfully',
      data: updatedJobCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating job category',
      error: error.message,
    });
  }
};

// Get all job categories
exports.getAllJobCategories = async (req, res) => {
  try {
    const jobCategories = await JobCategory.find();

    res.status(200).json({
      success: true,
      data: jobCategories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error fetching job categories',
      error: error.message,
    });
  }
};

// Delete a job category
exports.deleteJobCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the job category
    const deletedJobCategory = await JobCategory.findByIdAndDelete(id);

    if (!deletedJobCategory) {
      return res.status(404).json({
        success: false,
        message: 'Job category not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Job category deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error deleting job category',
      error: error.message,
    });
  }
};

// Toggle the status of a job category (block/unblock)
exports.toggleJobCategoryStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the job category by id
    const jobCategory = await JobCategory.findById(id);

    if (!jobCategory) {
      return res.status(404).json({
        success: false,
        message: 'Job category not found',
      });
    }

    // Toggle the blocked status
    jobCategory.blocked = !jobCategory.blocked;
    await jobCategory.save();

    res.status(200).json({
      success: true,
      message: `Job category ${
        jobCategory.blocked ? 'blocked' : 'unblocked'
      } successfully`,
      data: jobCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error toggling job category status',
      error: error.message,
    });
  }
};
