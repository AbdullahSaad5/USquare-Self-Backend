const express = require('express');
const {
  addJobCategory,
  updateJobCategory,
  getAllJobCategories,
  deleteJobCategory,
  toggleJobCategoryStatus,
} = require('../controllers/controller.category');

const router = express.Router();

// Add a new job category
router.post('/add', addJobCategory);

// Update an existing job category
router.put('/update/:id', updateJobCategory);

// Get all job categories
router.get('/get_all', getAllJobCategories);

// Delete a job category
router.delete('/delete/:id', deleteJobCategory);

// Toggle job category status (block/unblock)
router.put('/block/:id', toggleJobCategoryStatus);

module.exports = router;
