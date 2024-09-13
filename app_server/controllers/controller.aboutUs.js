

const AboutUs = require("../models/model.aboutUs.js");

// Get All AboutUs
module.exports.getAllAboutUs = (callback) => {
AboutUs.find({ state: { $ne: "deleted" } }, callback);
};

// Update AboutUs
module.exports.updateAboutUs = async (query, aboutUsForm, callback) => {
  const options = { new: true };
  AboutUs.findOneAndUpdate(query, aboutUsForm, options, callback);
};


// Add New AboutUs
module.exports.addAboutUs = (aboutUsData, callback) => {
  const newAboutUs = new AboutUs(aboutUsData);
  newAboutUs.save(callback);
};