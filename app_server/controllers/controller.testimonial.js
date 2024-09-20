var testimonial = require("../models/model.testimonial.js");

// Get All Category
module.exports.getAllTestimonial = (callback) => {
  testimonial
    .find({ state: { $ne: "deleted" } }, callback)
    .sort({ date_time: -1 });
};

// Add Category
module.exports.addTestimonial = async (categoryForm, callback) => {
  testimonial.create(categoryForm, callback);
};

// Update Category
module.exports.updateTestimonial = async (
  categoryId,
  categoryForm,
  options,
  callback
) => {
  var query = { _id: categoryId };
  testimonial.findOneAndUpdate(query, categoryForm, options, callback);
};

// Delete category
module.exports.removeByid = (id, callback) => {
  var query = { _id: id };
  testimonial.remove(query, callback);
};

// GET Testimonials For Landing Page
module.exports.getTestimonialsForLandingPage = (callback) => {
  testimonial
    .find({ blocked: { $ne: true } }, callback)
    .sort({ date_time: -1 })
    .limit(5);
};


// Toggle the blocked status of a testimonial
exports.blockTestimonial = function (testimonialId, callback) {
  // Step 1: Find the testimonial by ID
  testimonial.findById(testimonialId, function (err, testimonial) {
    if (err) {
      console.error("Error finding testimonial:", err);
      return callback(err, null);
    }
    
    if (!testimonial) {
      return callback(new Error("Testimonial not found"), null);
    }

    // Step 2: Toggle the blocked status
    testimonial.blocked = !testimonial.blocked; // Toggle the boolean value

    // Step 3: Save the updated testimonial
    testimonial.save(function (saveErr, updatedTestimonial) {
      if (saveErr) {
        console.error("Error saving testimonial:", saveErr);
        return callback(saveErr, null);
      }
      return callback(null, updatedTestimonial); // Return the updated testimonial
    });
  });
};

